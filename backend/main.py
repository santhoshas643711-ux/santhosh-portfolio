from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

load_dotenv()

EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Contact(BaseModel):
    name: str
    email: str
    message: str

@app.get("/")
def root():
    return {"message": "Portfolio API Running"}

@app.post("/contact")
def contact(data: Contact):
    try:
        msg = MIMEMultipart()

        msg["From"] = EMAIL_ADDRESS
        msg["To"] = EMAIL_ADDRESS
        msg["Subject"] = "New Portfolio Contact Message"

        body = f"""
Name: {data.name}

Email: {data.email}

Message:
{data.message}
"""

        msg.attach(MIMEText(body, "plain"))

        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)

        server.send_message(msg)
        server.quit()

        return {
            "success": True,
            "message": "Message sent successfully"
        }

    except Exception as e:
        print("EMAIL ERROR:")
        print(str(e))

        return {
            "success": False,
            "message": str(e)
        }