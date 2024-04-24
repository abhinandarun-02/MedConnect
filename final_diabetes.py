import pandas as pd
from sklearn.preprocessing import StandardScaler
from langchain_openai import ChatOpenAI
import os
from dotenv import load_dotenv

from langchain.prompts import PromptTemplate

load_dotenv()
api_key=os.getenv("OPENAI_API_KEY")

def generate():
    llm=ChatOpenAI(openai_api_key=api_key, temperature=0)
    template1="As a doctor's assistant, you are tasked with supporting the development of a personalized treatment plan for a patient. The patient has {condition}. Your role is to suggest potential personalised  options tailored to the individual in accordance to  said patients'  {history} being careful not to have contradicting treatment plans that goes against the current medications said patient is under or his/her allergies . Provide recommendations that consider their medical background, ensuring a comprehensive and personalized approach to their care with respect to said {condition}. Give me a possible treatment details for this. Give response as a doctor with the just the content"
    prompt = PromptTemplate(
    template=template1,
    input_variables=["condition", "history"],
)


    chain = prompt | llm
    ctx = chain.invoke(
        {"condition": "Type-1 Diabeties", "history": "Hypertension , Prescribed medication : ACE inhibitors (Lisinopril)"}
        )
    res = ctx.content
    x=res.split("1.")
    return "1."+x[1]
    
