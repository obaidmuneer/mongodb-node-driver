import { client } from './db/mongodb.mjs'

const db = client.db('test').collection('ecomm')

// basic crud
const findAll = async () => {
    const res = await db.find({}).toArray()
    console.log(res);
    return res
}
// findAll()

const findByQuery = async () => {
    // https://www.mongodb.com/docs/manual/reference/operator
    const res = await db.find({ name: 'airplane' }).toArray() // [] // toArray() will exhasut the cursor
    // const res = await db.findOne({ name: 'airplane' }) // {_id , name, price} // findone will not give the cursor
    // const res = await db.find({ price: { $gte: 20 } }).toArray() // [] //gt,lt,eq,gte,lte,in
    // const cursor = await db.find({ price: { $gte: 20 } }) 
    // const res = await db.find({ 'vendor_detail.year': 2020 }) .toArray()
    console.log(res);
    return res
}
// findByQuery()

//projection

const projection = async () => {
    // const res = await db.findOne({}, { projection: { name: 1 } }) // returns _id and name
    // const res = await db.find({}, { projection: { name: 1, _id: 0 } }).toArray() // returns name
    // const res = await db.find({}).project({ name: 1 }).toArray()
    const res = await db.find({}).project({ 'vendor_detail.model': 0 }).toArray()
    console.log(res);
    return res
}
// projection()

const embeddedDoc = async () => {
    const res = await db.updateMany({
        $and: [
            { name: { $ne: 'mobile' } },
            { name: { $ne: 'mobile_1' } }
        ]
    }, { $set: { vendor_detail: { model: 'KAKA', year: 2023 } } })
    console.log(res);
    return res
}
// embeddedDoc()


const insertOne = async () => {
    const res = await db.insertOne({ name: 'mobile_1', price: 30, vendor_detail: { model: 'KAKA', year: 2020 } })
    console.log(res);
    return res
}
// insertOne()

const insertMany = async () => {
    const res = await db.insertMany([{ name: 'car', price: 50 }, { name: 'airplane', price: 100 }])
    console.log(res);
    return res
}

const updateOne = async () => {
    // const res = await db.updateOne({}, { $set: { name: 'tanga' } })
    const res = await db.updateOne({ name: 'airplane' }, {
        $set: { name: 'truck' }
    })
    console.log(res);
    return res
}

const updateMany = async () => {
    const res = await db.updateMany({ name: 'truck' }, {
        $set: { name: 'cycle' }
    })
    console.log(res);
    return res
}

const deleteOne = async () => {
    const res = await db.deleteOne({ name: 'cycle' })
    console.log(res);
    return res
}

const deleteMany = async () => {
    const res = await db.deleteMany({ name: 'cycle' })
    console.log(res);
    return res
}

// https://www.mongodb.com/docs/manual/core/data-modeling-introduction/
// https://www.mongodb.com/docs/manual/core/schema-validation/specify-json-schema/

(async () => {
    // await findAll()
    // await insertOne()
    // await insertMany()
    // await findByQuery()
    // await updateOne()
    // await updateMany()
    // await deleteOne()
    // await deleteMany()
})()