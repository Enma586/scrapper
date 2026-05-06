import zod from 'zod'

const createEntrySchema = zod.object({
    title: zod.string().min(1, "Title is required"),
    type: zod.enum(['snippet', 'english_term']),
    content: zod.string().min(1, "Content is required"),
    tags: zod.array(zod.string()).optional(),
    source: zod.string().optional(),
    metadata: zod.object({
        difficulty: zod.enum(['beginner', 'intermediate', 'advanced']).optional()
    }).optional(),
    timestamps: zod.object({
        createdAt: zod.date().optional(),
        updatedAt: zod.date().optional()
    }).optional()
})


export default createEntrySchema