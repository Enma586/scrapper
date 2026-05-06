import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema({
    type: { 
        type: String, 
        enum: ['snippet', 'english_term'], 
        required: true 
    },
    title: { 
        type: String, 
        required: true,
        trim: true
    },
    content: { 
        type: String, 
        required: true 
    },
    // Los tags nos servirán para filtrar (ej: 'node', 'auth', 'idiom')
    tags: [{ 
        type: String,
        lowercase: true,
        trim: true
    }],
    source: { 
        type: String,
        trim: true
    },
    // Metadatos adicionales (ej. si el término de inglés ya fue enviado a Telegram)
    metadata: {
        sentToTelegram: { type: Boolean, default: false },
        difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'] }
    }
}, {
    timestamps: true 
});

entrySchema.index({ title: 'text', content: 'text', tags: 'text' });

export default mongoose.model('Entry', entrySchema);