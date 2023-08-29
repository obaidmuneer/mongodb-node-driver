import { client } from './db/mongodb.mjs'

const db = client.db('test').collection('ecomm')

const findAll = async () => {
    const res = await db.find({}).toArray()
    console.log(res);
    return res
}

const findByQuery = async () => {
    const res = await db.find({ name: 'airplane' }).toArray() // []
    // const res = await db.findOne({ name: 'airplane' }) // {_id , name, price} 
    console.log(res);
    return res
}

const insertOne = async () => {
    const res = await db.insertOne({ name: 'mobile', price: 20 })
    console.log(res);
    return res
}

const insertMany = async () => {
    const res = await db.insertMany([{ name: 'car', price: 50 }, { name: 'airplane', price: 100 }])
    console.log(res);
    return res
}

const updateOne = async () => {
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