import Entry from '../models/Entry.js';

export const createEntry = async (entryData) => {
    try {
        const newEntry = new Entry(entryData);
        const savedEntry = await newEntry.save();
        
        return savedEntry;
    } catch (error) {
        // Aquí podrías agregar un logger más adelante (como Pino o Winston)
        console.error("Error en EntryService:", error);
        throw error;
    }
};