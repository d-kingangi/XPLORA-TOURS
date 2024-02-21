import mssql from 'mssql'
import { createtour } from '../tours.controller'

describe("Tour Creation", ()=>{

    let res: any

    beforeEach(()=>{
        res={
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        }
    })

    it('Successfully creates tour', async()=>{
        const req = {
            body:{
                destination: "Ol Pejeta",
                price: 450,
                startDate: "05-05-2024",
                endDate: "06-06-24",
            }
        }

        const mockedInput = jest.fn().mockReturnThis() //makes it chainable

        const mockedExecute = jest.fn().mockResolvedValue({rowsAffected: [1]})

        const mockedRequest ={
            input: mockedInput,
            execute: mockedExecute
        }

        const mockedPool ={
            request: jest.fn().mockReturnValue(mockedRequest)
        }

        jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never)

        await createtour(req as any, res)

        expect(res.json).toHaveBeenCalledWith({message: "Tour created successfully"})
    })
})

