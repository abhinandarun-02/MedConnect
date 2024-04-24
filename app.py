import streamlit as st
# pip install -U scikit-learn
import pickle
import string
import requests
from streamlit_lottie import st_lottie
from streamlit_option_menu import option_menu
import pandas as pd


from langchain_openai import ChatOpenAI
import os
from dotenv import load_dotenv

from langchain.prompts import PromptTemplate

load_dotenv()
api_key=os.getenv("OPENAI_API_KEY")

def generate():
    llm=ChatOpenAI(openai_api_key=api_key, temperature=0)
    template1="As a patient assistant, you are tasked with supporting the development of a personalized treatment plan and diet plan for a patient. The patient has {condition}. Your role is to suggest potential personalised  options tailored to the individual in accordance to  said patients'  {history} being careful not to have contradicting treatment plans that goes against the current medications said patient is under or his/her allergies . Provide recommendations that consider their medical background, ensuring a comprehensive and personalized approach to their care with respect to said {condition}. Give user a possible treatment and diet details for this. Give response as a patient assistant with the just the content"
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
    



# Slide bar
with st.sidebar:
    selected = option_menu(
        menu_title="Main Menu",  # required
        options=["Home", "Diabetes Prediction",
                 "Heart Disease Prediction", "Personalized Treatment", "Contact"],  # required
        icons=["house", "book", "book", "book", "envelope"],  # optional
        menu_icon="cast",  # optional
        default_index=0,  # optional
    )

# loading model and vectorizer
with open('diabetes_model.pkl', 'rb') as model_file:
    loaded_model_dia = pickle.load(model_file)

with open('standard_scaler_diabetes.pkl', 'rb') as scaler_file:
    scaler_dia = pickle.load(scaler_file)

with open('heart_model.pkl', 'rb') as model_file:
    loaded_model_heart = pickle.load(model_file)

with open('standard_scaler_heart.pkl', 'rb') as scaler_file:
    scaler_heart = pickle.load(scaler_file)


def process_string(input_str):
    return ([float(num.strip()) for num in input_str.split(",")])


if selected == "Home":
    st.title("HEALTH CONNECT")
    st.write('''Revolutionizing healthcare with personalized insights and doctor-friendly simplicity: Introducing our innovative health app!
Imagine an app that empowers you to take charge of your health, and simplifies consultations for your doctor. That's exactly what our app delivers. By analyzing your Electrocardiogram (ECG) reading, our intelligent system unveils potential chronic heart and diabetic conditions, providing personalized treatment plans tailored to your unique medical history. No more sifting through mountains of paperwork - our app presents your doctor with a clear, concise overview, saving valuable time and allowing them to focus on what matters most: you. This synergy between patient empowerment and streamlined doctor interaction paves the way for a future of proactive healthcare, where informed individuals and efficient medical professionals work together towards a healthier tomorrow.''')


if selected == "Diabetes Prediction":
    st.title("Diabetes Prediction")
    input_features_dia = st.text_area("Enter the Values..",
                                      height=100, value="26,1,20.1,119,81,5.8,4.36,0.86, 0.9, 2.43, 12, 5.4, 63.8, 5.4, 3, 3, 0")
    # input_features_dia = [59, 2, 22.3, 99, 61, 5.7, 6.36, 0.98,
    #                       1.57, 4.03, 21, 5.7, 54.1, 5.67, 4.860753, 4.860753, 0]

    if st.button('Check'):
        if input_features_dia:
            # 1. preprocess

            input_df = pd.DataFrame([process_string(input_features_dia)])

            # 2.
            scaled_input = scaler_dia.transform(input_df.values)

            # 3. predict
            prediction = loaded_model_dia.predict(scaled_input)

            # 4. Display
            result = prediction[0]

        if result == 1:
            st.header("Diabetes Detected")
        else:
            st.header("Not Detected")
    else:
        st.header("Enter the values")
    parameters = [
        "Age",
        "Gender",
        "BMI",
        "SBP (Systolic Blood Pressure)",
        "DBP (Diastolic Blood Pressure)",
        "FPG (Fasting Plasma Glucose)",
        "Chol (Cholesterol)",
        "Tri (Triglycerides)",
        "HDL (High-Density Lipoprotein)",
        "LDL (Low-Density Lipoprotein)",
        "ALT (Alanine Aminotransferase)",
        "BUN (Blood Urea Nitrogen)",
        "CCR (Creatinine Clearance Rate)",
        "FFPG (Postprandial Plasma Glucose)",
        "Smoking",
        "Drinking",
        "Family History",
        "Diabetes"
    ]

    for i, parameter in enumerate(parameters, start=1):
        st.write(f"{i}. {parameter}")


if selected == "Heart Disease Prediction":
    st.title("Heart Disease Prediction")
    input_features_heart = st.text_area("Enter the Values..",
                                        height=100, value="58, 0, 0, 100, 248, 0, 0, 122, 0, 1, 1, 0, 2")
    # input_features_heart = [58, 0, 0, 100, 248, 0, 0, 122, 0, 1, 1, 0, 2]

    if st.button('Check'):
        if input_features_heart:
            # 1. preprocess
            input_df = pd.DataFrame([process_string(input_features_heart)])

            # 2.
            scaled_input = scaler_heart.transform(input_df.values)

            # 3. predict
            prediction = loaded_model_heart.predict(scaled_input)

            # 4. Display
            result = prediction[0]

            if result == 1:
                st.header("Heart Disease Detected")
            else:
                st.header("Not Detected")
        else:
            st.header("Enter the values")
    points = [
        "Age",
        "Sex",
        "Chest pain type (4 values)",
        "Resting blood pressure",
        "Serum cholesterol in mg/dl",
        "Fasting blood sugar > 120 mg/dl",
        "Resting electrocardiographic results (values 0,1,2)",
        "Maximum heart rate achieved",
        "Exercise-induced angina",
        "Oldpeak = ST depression induced by exercise relative to rest",
        "The slope of the peak exercise ST segment",
        "Number of major vessels (0-3) colored by fluoroscopy",
        "Thal: 0 = normal; 1 = fixed defect; 2 = reversible defect"
    ]
    for i, point in enumerate(points, start=1):
        st.write(f"{i}. {point}")


if selected == "Contact":
    st.title(f"Connect With Us")


if selected == "Personalized Treatment":

    st.title(f"Personalized Treatment")

    name = st.text_input("Enter Patient name:")
    st.write("Name:", name)

    age = st.number_input("Enter your age:", min_value=0,
                          max_value=150, step=1)
    st.write("Age:", age)

    selected_option = st.selectbox("Select health condition:", [
        "Diabetes", "Heart disease"])
    st.write("You selected:", selected_option)

    if selected_option == "Diabetes":
        diabetes_subtype = st.selectbox("Select Diabetes subtype:", [
                                        "Diabetes Type 1", "Diabetes Type 2", "Gestational Diabetes"])
        st.write("You selected Diabetes subtype:", diabetes_subtype)
    if st.button("Generate"):
        # Call the function to generate a paragraph when the button is clicked
        paragraph = generate()

        # Display the generated paragraph
        st.write(paragraph)
