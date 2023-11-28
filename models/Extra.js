const mongoose = require('mongoose')

const ExtraSchema = new mongoose.Schema({
    jenis: {
        type: String,
        requirred: [true, 'Silahkan isi jenis ekskul'],
        unique: true
    },

    anggota: {
        type: String,
        requirred: [true, 'Silahkan isi jumlah anggota ekskul'],
        
    },

    pengampu: {
        type: String,
        requirred: [true, 'Silahkan isi pengampu ekskul'],
        
    },

    ruangan: {
        type: String,
        requirred: [true, 'Silahkan isi ruangan ekskul'],
        
    },

    waktu: {
        type: String,
        requirred: [true, 'Silahkan isi waktu pelaksanaan ekskul'],
        
    }
    
})

module.exports  = mongoose.model('extra', ExtraSchema)