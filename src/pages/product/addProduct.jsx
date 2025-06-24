import React, { useRef, useState } from 'react'
import { FiArrowLeft, FiArrowLeftCircle, FiArrowUpLeft, FiX } from 'react-icons/fi'
import { clothingCheckboxes, interiorCheckboxes } from './addProductCheckboxes';
import { Link } from 'react-router-dom';
import Modal from '../modal';
import { useAddNewCatgoryMutation } from '../../services/bluebreedAdmin';
import { useForm } from 'react-hook-form';
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';



const AddProduct = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [clickStates, setClickedStates] = useState({btn1: false, btn2: false});
    const [inputTagState, setInputTagState] = useState({input1: "", input2: ""});
    const [tagsState, setTagsState] = useState({tag1: [], tag2: []});
    const [boxesState, setBoxesState] = useState({clothingBoxes: clothingCheckboxes, interiorBoxes: interiorCheckboxes});

    const categories = ["Clothing - Women", "Clothing - Men", "Casual Wear", "Traditional / Formal Wear", "Home Decor & Interior", "Furniture", "Bedding & Textiles", "Wall Art & Accessories", "Lighting & Fixtures"]
    /* schema, zod form validation */
    const categorySchema = z.object({
        categoryName: z.string().min(2, "category name must be at least 2 characters long").max(30, "category name must be at most 30 characters long"),
    });

    const productSchema = z.object({
        productName: z.string().min(2, "Product name must be at least 2 characters long").max(50, "Product name must be at most 50 characters long"),
        productDescription: z.string().min(10, "Product description must be at least 10 characters long").max(500, "Product description must be at most 500 characters long"),
        productFeatures: z.string().min(10, "Product features must be at least 10 characters long").max(500, "Product features must be at most 500 characters long"),
        currentStockNumber: z.number(),
        color: z.string().min(2, "Color is required"),
        images: z.array(z.string().startsWith("data:image/")).min(1, "At least one image is required"),
        price: z.object({
            actualPrice: z.string().min(1, "Actual price is required"),
            discountPrice: z.string().min(1, "Discount price is required"),
        }),
        includeVAT: z.boolean().optional(), 
        otherOptions: z.object({
            sizeAndDimension: z.array(z.enum["SX", "MX", "LX", "XLX"]),
            clothingReadyToWearSizes: z.object({
                standardClothingSize: z.array(
                    z.enum(["XS", "S", "M", "L", "XL", "XXL", "XXXL"]).optional()
                ),
                shoeSizes: z.array(
                    z.enum(["EU 36-46", "UK 3-12", "US 4-6"]).optional()
                ),
                kidsSizes: z.array(
                    z.enum(["0-3 months,3-6months,6-12months", "1-2years,3-4years,5-6yars"]).optional()
                ),

            }),
            homeInteriorAndProductSizes: z.object({
                furnitureDimensions: z.array(
                    z.enum(['Small (2-seater)','Medium (3-seater)','Large (4-seater)']).optional()
                ),
                curtainsABlindSizes: z.array(
                    z.enum(['Standard Window (4ft x 5ft)','Large Window (6ft X 7ft)','Extra Large (8ft x 9ft)']).optional()
                ),
                beddingAndMattressSizes: z.array(
                    z.enum(['Twin','Full','Queen','King']).optional()
                ),
                RugsAndCarpetsDimension: z.array(
                    z.enum(['Small (3ft x 5ft)','Medium (5ft X 7ft)','Large (8ft x 10ft)']).optional()
                )
            })
        })
    })

    const [addNewCatgory, {isLoading, error}] = useAddNewCatgoryMutation();
    const {register: categoryRegister, handleSubmit: handleCategorySubmit, formState: {errors: categoryErrors, isSubmitting: categorySubmitting}, reset: categoryReset} = useForm({resolver: zodResolver(categorySchema)});
    const {register: productRegister, handleSubmit: handleProductSubmit, setValue, formState: {errors: productErrors, isSubmitting: productSubmitting}, reset: productReset} = useForm({resolver: zodResolver(productSchema)})

    /* HandleSubmit for category and product form needed for the form submision*/
    const handleAddCategory = async (data) => {
        
        console.log("data", data)
        try {
            const response = await addNewCatgory({categoryName: data}).unwrap()
            console.log("Category added successfully:", response);
            categoryReset();
            setIsOpen(false);
            
        } catch (err) {
                console.log("Error adding category:", err);
        }
    }

    const handleAddProduct = (data) => {
        console.log("productData", data)
        try {

        } catch (err) {

        }
    }


    const handleClick = (btn) => {
        setClickedStates((prev) => ({
            ...prev,
            [btn]: !prev[btn]
        }))
    }

    const handleEnterTags = (e, input, tag) => {
        ///
        if ((e.key === "Enter" || e.key === ",") && inputTagState[input].trim()) {
            e.preventDefault();
            const newTag = inputTagState[input].trim().replace(/,$/, '');
            console.log("newtag", newTag)
            console.log("tagstatehandle", tagsState[tag])
            if (!tagsState[tag].includes(newTag)) {
                setTagsState((prev) => ({
                    ...prev, [tag]: [...prev[tag], newTag]
                }))
            }
             setInputTagState((prev) => (
                        { ...prev, [input]: ""}
                    ))
        }
        
    }

    

    const removeTag = (tag, index) => {
        setTagsState((prev) => ({...prev, [tag]: prev[tag].filter((_, i) => i !== index)}));
        console.log("tagstate", tagsState[tag])
    }

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error)
            reader.readAsDataURL(file)
        })
    }

    const [images, setImages] = useState([]);
   

    const handleFileChange = async (files) => {
        const fileArray = Array.from(files);
        return Promise.all(fileArray.map((file) => fileToBase64(file)
        )).then((base64Files) => {
            setImages(base64Files);
            setValue("images",base64Files);
            console.log("images", base64Files);
        }).catch((error) => {
            console.error("Error converting files to base64:", error);
        });
        
    }

       /*  const fileToBase64 = (file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onload = () => resolve(reader.result)
                reader.onerror = (error) => reject(error)
                reader.readAsDataURL(file)
            })
        }

        const handleFileChange = async (files) => {
            const convertedFiles = Array.from(files)
            return Promise.all(convertedFiles.map((file) => fileToBase64(file)))
            .then((base64) => console.log("Converted files:", base64))
        } */
   

  return (
    <>
   
        {/* Pop Up Modal  */}
        { isOpen &&  <Modal isOpen={isOpen}>
            <div className='w-[90%] bg-white max-w-xl rounded px-10 space-y-4 py-4 text-[14px]'>
                <h3 className='text-[#1F2937] text-[20px] font-semibold'>Add New Category</h3>
                <label htmlFor="" className='text-[14px] text-[#5A607F]'>Product Name</label>
                <input type="text" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none' placeholder='e.g., Dress, Sofa, Curtain' name='categoryName' /* ref={inputRef} */ {...categoryRegister("categoryName")}/>
                {categoryErrors.categoryName && <p className='text-red-500 text-[12px]'>{categoryErrors.categoryName.message}</p>   }
                <div className='w-full flex justify-between gap-4'>
                    <button type='submit' className='w-full border border-[#D0D5DD] py-2 bg-[#E6B566] rounded cursor-pointer' onClick={() => setIsOpen(false)}>Cancel</button>
                    <button type='submit' className='w-full border border-[#D0D5DD] py-2 rounded' onClick={handleCategorySubmit(handleAddCategory)}>  {categorySubmitting ? "Submitting" : "Create"}</button>
                </div>
                {error && <p className='text-red-500 text-[12px]'>Error: {error.data?.message || "Something went wrong"}</p>}
            </div>
        </Modal>  }
        {/*  */}

        <form className='min-h-full  space-y-4' onSubmit={handleProductSubmit(handleAddProduct)}>
   
        <div className='justify-between h-15 flex items-center'>
            <div className=' flex flex-col'>
                <p className='flex items-center text-[#5A607F]'><FiArrowLeft className='text-[#7E84A3] h-[16px] w-[20px]'/> <Link to={"/prds"} className='text-[14px]'>Back</Link> </p> 
                <h3 className='text-[24px] font-bold text-[#131523]'>Add Product</h3>
            </div>
            <div className='flex gap-2 max-h-full'>
                <button type='button' className='border border-[#EDEFF2] text-[16px] px-8 py-2 text-[#4A4A4A] cursor-pointer' onClick={productReset}>Cancel</button>
                <button type='submit' className='text-[16px] bg-[#E6B566] px-6 py-2 text-white rounded font-bold cursor-pointer'>Save</button>
            </div>
        </div>
        {/* w- shouldnt change the width */}
        <div className='flex h-full mb-4 space-x-3 flex-grow rounded '>
        <div className='flex-grow p-5 bg-white rounded-[6px] mb-4 space-y-4 h-full' >
            <h3 className='text-[16px]'>Information</h3>
            <div className='space-y-1 flex flex-col '>
                <label htmlFor="productName" className='text-[14px] text-[#5A607F]'>Product Name</label>
                <input id="productName" type="text" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none' placeholder='e.g., Dress, Sofa, Curtain' {...productRegister("productName")}/>
                {productErrors.productName && <p className='text-red-500 text-[12px]'>{productErrors.productName.message}</p>   }
            </div>
            <div className='space-y-1 flex flex-col '>
                <label htmlFor="productDescription" className='text-[14px] text-[#5A607F]'>Product Description</label>
                <textarea id='productDescription' type="text" className='w-full h-24 pt-1 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none resize-none' placeholder='Describe the design, fabric, or material details' {...productRegister("productDescription")}/>
                {productErrors.productDescription && <p className='text-red-500 text-[12px]'>{productErrors.productDescription.message}</p>   }
            </div>
            <div className='space-y-1 flex flex-col '>
                <label htmlFor="productFeature" className='text-[14px] text-[#5A607F]'>Product Features</label>
                <textarea id="productFeature" type="text" className='w-full h-24 pt-1 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none resize-none' placeholder='Describe the design, fabric, or material features' {...productRegister("productFeatures")}/>
                {productErrors.productFeatures && <p className='text-red-500 text-[12px]'>{productErrors.productFeatures.message}</p>   }
            </div>
            <div className='space-y-1 flex flex-col '>
                <label htmlFor="currentStockNumber" className='text-[14px] text-[#5A607F]'>How many in Stock?</label>
                <input type="number" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none' placeholder='e.g., 34' id='currentStockNumber' {...productRegister("currentStockNumber", { valueAsNumber: true})} />
                {productErrors.currentStockNumber && <p className='text-red-500 text-[12px]'>{productErrors.currentStockNumber.message}</p>   }
            </div>
            <div className='space-y-1 flex flex-col pb-4 '>
                <label htmlFor="color" className='text-[14px] text-[#5A607F]'>Color</label>
                <input type="text" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none' placeholder='e.g., white, black, blue'  id='color' {...productRegister("color")}/>
                {productErrors.color && <p className='text-red-500 text-[12px]'>{productErrors.color.message}</p>   }
            </div>
            <hr className='w-full text-[#D7DBEC] '/>
            <div className='space-y-1 flex flex-col pb-4 '>
                <label htmlFor="images" className='text-[16px] text-[#131523] font-bold'>Images</label>
                <div className='space-y-6'>
                    <div className='flex'>
                        {
                            images.length > 0 && (
                                images.map((image, index) => (
                                    <img src={image} alt='displayed image' className='w-[200px]' key={index}/>
                                ) )

                            )
                        }
                    </div>
                    <div className=' border-[#A1A7C4] border-dashed border h-[168px] rounded flex justify-center items-center flex-col space-y-4'>
                        <input type="file" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none hidden' placeholder='e.g., white, black, blue' multiple id='images' {...productRegister("images")} onChange={(e) => handleFileChange(e.target.files)}/>
                        <label htmlFor="images" className='text-[#E6B566] px-10 py-1 border border-[#D7DBEC] rounded'>Upload Product Image</label>
                        <span className='text-[#5A607F] text-[14px]'>Drag and drop product images here</span>
                    </div>

                </div>

                {productErrors.images && <p className='text-red-500 text-[12px]'>{productErrors.images.message}</p>   }
            </div>
            {/*  */}
            <div className='space-y-3 '>
               <h3 className='text-[16px] text-[#131523] font-bold'>Price</h3>
                <div className='flex w-full justify-between'>
                    <div className='flex flex-col w-[47%]'>
                    <label htmlFor="actualPrice" className='text-[14px] text-[#5A607F] pb-3'>Product Price</label>
                    <input type="number" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none'  id='actualPrice' {...productRegister("price.actualPrice")}/>
                    {productErrors.price?.actualPrice && <p className='text-red-500 text-[12px]'>{productErrors.price.actualPrice.message}</p>   }
                    </div>
                    <div className='flex flex-col w-[47%]'>
                    <label htmlFor="discountPrice" className='text-[14px] text-[#5A607F] pb-3'>Discount Price (if applicable)</label>
                    <input type="text" className='w-full py-2 px-4 rounded text-[#A1A7C4] text-[16px] border border-[#D9E1EC] outline-none'  id="discountPrice" {...productRegister("price.discountPrice")}/>
                    {productErrors.price?.discountPrice && <p className='text-red-500 text-[12px]'>{productErrors.price.discountPrice.message}</p>   }
                    </div>
                </div>
                <div className='flex gap-2'>
                    <button className={`w-11 h-6 rounded-2xl relative ${clickStates.btn1 ? "bg-[#E6B566]" : "bg-[#FF89011A] "}`} onClick={() => handleClick("btn1")} type='button'><span className={`bg-white absolute w-4 h-4 rounded-xl bottom-1 ${clickStates.btn1 ? "right-1" : "left-1"} `} ></span></button>{/* shadow-[#262C4729] */}
                    <p className='text-[#131523] text-[16px]'>Include VAT or Custom Charges?</p>
                </div>
            </div>
            <hr className='w-full text-[#D7DBEC] '/>
            <div className='space-y-3 '>
                <h3 className='text-[#131523] text-[16px] font-bold'>Different Options</h3>
                <div className='flex gap-2'>
                    <button className={`w-11 h-6 rounded-2xl relative ${clickStates.btn2 ? "bg-[#E6B566]" : "bg-[#FF89011A] "}`} onClick={() => handleClick("btn2")} type='button'><span className={`bg-white absolute w-4 h-4 rounded-xl bottom-1 ${clickStates.btn2 ? "right-1" : "left-1"} `} ></span></button>{/* shadow-[#262C4729] */}
                    <p className='text-[#131523] text-[16px]'>Does this product have size or material variations?</p>
                </div>
            </div>

            <div className='space-y-3 pt-4 bg-white'>
                <h3 className='text-[#131523] text-[16px] font-bold'>Size / Dimensions</h3>
                <div className='space-y-1 flex flex-col'>
                    <label htmlFor="" className='text-[14px] text-[#5A607F]'>Value</label>
                    <div className=' flex h-10 items-center rounded border border-[#D9E1EC] px-2'>
                    <div className=' flex gap-2 h-[80%]'>
                        { tagsState.tag1 &&
                        tagsState.tag1.map((tag, index) => (
                            <span className='py-1 px-3 rounded flex items-center w-fit gap-2 text-[#5A607F] text-[14px] bg-[#E6E9F4]' key={index}>{tag}  <FiX className='h-fullpt-1 text-[#7E84A3]' onClick={() => removeTag("tag1", index)}/></span>
                        ))
                    }
                    </div>
                    <input type="text" className='w-full px-3 text-[#A1A7C4] text-[16px] h-[80%]  outline-none' placeholder='' value={inputTagState.input1} onChange={(e) => setInputTagState((prev) => ({...prev, input1: e.target.value.toUpperCase()}))} onKeyDown={(e) => handleEnterTags(e, "input1", "tag1")}/></div>
                 </div>
            </div>

            
            <div className=' w-full flex'>
                
                    <div className='space-y-3 w-full'>
                    <h3 className='text-[16px] font-semibold text-[#344054]'>Clothing (Ready-to-Wear) Size Options:</h3>
                    {boxesState.clothingBoxes.map((group) => (
                        <div key={group.category} className='space-y-3'>
                        <h4 className='text-[14px] font-medium text-[#344054]'>{group.category}</h4>
                        <ul className='space-y-2'>
                            {group.options.map((option, index) => (
                                <li key={index} className='flex gap-3 items-center'>
                                    <input type="checkbox" className='w-5 h-5 pt-1 border border-[#D7DBEC] rounded outline-none'/>
                                    <label htmlFor="" className='text-[16px] text-[#131523]'>{option.name}</label>
                                </li>

                            ))}
                        </ul>
                    </div>
                    )) 
                    }
                </div>
                <div className='space-y-3 w-full'>
                    <h3>Home & Interior Product Sizes:</h3>
                    {boxesState.interiorBoxes.map((group) => (
                        <div key={group.category} className='space-y-3'>
                        <h4 className='text-[14px] font-medium text-[#344054]'>{group.category}</h4>
                        <ul className='space-y-2'>
                            {group.options.map((option, index) => (
                                <li key={index} className='flex gap-3 items-center'>
                                    <input type="checkbox" className='w-5 h-5 pt-1 border border-[#D7DBEC] rounded outline-none'/>
                                    <label htmlFor="" className='text-[16px] text-[#131523]'>{option.name}</label>
                                </li>

                            ))}
                        </ul>
                    </div>
                    )) 
                    }
                </div>
            </div>
            
        </div>
            
        <div className='w-[30%] space-y-3'>
            <div className='flex flex-col space-y-4 bg-white rounded-[6px] p-5'>
                <h3 className='text-[16px] font-bold text-[#131523]'>Category</h3>
                    <ul className='space-y-2'>
                    {categories.map((category, index) => (
                        <li className='flex text-[#131523] text-[16px] gap-3 items-center' key={index}>
                        <input type="checkbox" className='w-5 h-5 pt-1 border border-[#D7DBEC] rounded outline-none'/>
                        <label htmlFor="" className=''>{category}</label>
                     </li>
                    ))}
                    </ul>
                <span className='text-[#E6B566] text-[16px] font-semibold cursor-pointer' onClick={() => setIsOpen(true)}>Add a New Category</span>
            </div>
            <div className='flex flex-col space-y-4 bg-white rounded-[6px] p-5'>
                <h3 className='text-[16px] font-bold text-[#131523]'>Tags</h3>
                <div className=' text-[#131523] text-[16px] gap-2 '>
                    <label htmlFor="">Add Tags</label>
                    <input type="text" className='w-full h-10 border border-[#D7DBEC] rounded text-[14px] px-2 outline-none mt-1' placeholder='Add Fabric Type, Style, or Material' value={inputTagState.input2} onChange={(e) => setInputTagState((prev) => ({...prev, input2: e.target.value.toUpperCase()}))} onKeyDown={(e) => handleEnterTags(e, "input2", "tag2")}/>
                </div>
                <div className='flex-wrap flex gap-2'>
                    { tagsState.tag2 &&
                        tagsState.tag2.map((tag, index) => (
                            <span className='py-1 px-3 rounded flex items-center bg-[#E6E9F4] w-fit gap-2 text-[#5A607F] text-[14px]' key={index}>{tag} <FiX className='h-fullpt-1 text-[#7E84A3]' onClick={() => removeTag("tag2", index)}/></span>

                        ))
                    }
                    
                </div>
            </div>

            <div className='flex flex-col space-y-4 bg-white rounded-[6px] p-5'>
                <h3 className='text-[16px] font-bold text-[#131523]'>SEO SETTING</h3>
                <div className=' text-[#131523] text-[16px]'>
                    <label htmlFor="">Title</label>
                    <input type="text" className='w-full h-10 border border-[#D7DBEC] rounded text-[14px] px-2 outline-none mt-1' />
                </div>
                <div className=' text-[#131523] text-[16px]'>
                    <label htmlFor="">Description</label>
                    <textarea type="text" className='w-full h-24 border border-[#D7DBEC] rounded text-[14px] px-2 outline-none mt-1 resize-none pt-1' />
                </div>
            </div>


            </div>
        
        </div>
        </form>
    </>
    
  )
}

export default AddProduct