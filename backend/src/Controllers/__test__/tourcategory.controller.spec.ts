import app from "../../server"
import request from 'supertest'

describe('Tdd for notifications', ()=>{

    it('get all tour categories',async () => {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJkZjU3ZTQtZjJkNy00ZGRkLTg5OGMtMDIyZjkxNTgyMTEzIiwibmFtZSI6IkphbWVzIEthcml1a2kiLCJlbWFpbCI6ImphbWVzZXcyNjA1QGdtYWlsLmNvbSIsInJvbGUiOiJkcml2ZXIiLCJpYXQiOjE3MDg1OTQ2NTksImV4cCI6MTcwODU5ODI1OX0.US7MByo3_ZfQh6Ghqd45oJv9GCt-K6yosNT8CkVIl_o'

        let res = await request(app).get('/tourCategory').set('token', token)

        expect(res.status).toBe(200)

        expect(res.body.tour_category).toBeInstanceOf(Array)
    })

    it('gets a tour type by ID',async () => {

        let res = await request(app).get('/tourCategory/')

        expect(res.status).toBe(200)

        expect(res.body.tour_category).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    categoryId: expect.any(String),
                    categoryName: expect.any(String),
                    categoryDescr: expect.any(String)
                })
            ])
        )
        
    })
})