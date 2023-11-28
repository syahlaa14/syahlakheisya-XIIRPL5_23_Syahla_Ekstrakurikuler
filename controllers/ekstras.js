const Extra = require('../models/Extra')

module.exports = {

    //get all extra
    show : async (req, res) => {
        try {
            const extras = await Extra.find()
            if(extras.length > 0){
                res.status(200).json({
                    status : true,
                    data : extras,
                    method : req.method,
                    url : req.url
                })
            
            }else {
                res.json({
                    status : false,
                    message : 'Data kosong'
                })
            }

        } catch (error) {
            res.status(400).json({succes: false})
        }

      },

      //get a extra
      select : async (req, res) => {
        try {
            const extra = await Extra.findById(req.params.id)
            res.json({
                status : true,
                data : extra,
                method : req.method,
                url : req.url,
                message : 'Data ditemukan'
            })
        } catch (error) {
            res.status(400).json({succes: false})            
        }
    
      },

      send : async (req, res) => {
        try {
            const extra = await Extra.create(req.body)
            res.status(200).json({
                status : true,
                data : extra,
                method : req.method,
                url : req.url,
                message : 'Data ditambah'
            })

        } catch (error) {
            res.status(400).json({succes: false})
        }
        
      },

      set : async (req, res) => {
        try {
            const extra = await Extra.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.json({
                status : true,
                data : extra,
                method : req.method,
                url : req.url,
                message : 'Data berubah'
            })
        } catch (error) {
            res.status(400).json({succes: false})            
        }
    
      },

      steal : async (req, res) => {
        try {
            await Extra.findByIdAndDelete(req.params.id)
            res.json({
                status : true,
                method : req.method,
                url : req.url,
                message : 'Data dihapus'
            }) 
        } catch (error) {
            res.status(400).json({succes: false})                        
        }

      }
}