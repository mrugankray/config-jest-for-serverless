import { handler } from "./index"

beforeEach(() => {
    jest.resetAllMocks()
})

test("test for adding two numbers", async () => {
    const event = {
        headers: {
            "Content-Type": "application/json"
            // ... other headers
        },
        body: "dummy body"
    }

    const response = await handler(event)

    expect(response.statusCode).toEqual(200)
})