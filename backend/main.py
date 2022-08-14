import string
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import search
from pydantic import BaseModel
app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Item(BaseModel):
    id:str
    password:str
    dptArea:str
    arrArea:str
    date:str
    time:str

@app.post("/")
async def root(item : Item ):
    print(item.id)
    print(item.password)
    print(item.dptArea)
    print(item.arrArea)
    print(item.time)
    search.run(item.id, item.password, item.dptArea, item.arrArea, item.date, item.time)
    return item
	# return { "message" : "Hello World" }