import {z} from "zod"
// Product schema validation using Zod
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


    export default productSchema;