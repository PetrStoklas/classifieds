const newProductForm = [
    {
        "generalType": "text_email_passw",
        "label_for": "Product name",
        "type": "text",
        "input_name": "title",
        "input_id": "title",
        "input_placeholder": "Enter name of your product"
    },
    {
        "generalType": "text_email_passw",
        "label_for": "Description",
        "type": "text",
        "input_name": "description",
        "input_id": "description",
        "input_placeholder": "Say something about your product"
    },
    {
        "generalType": "text_email_passw",
        "label_for": "Price",
        "type": "number",
        "input_name": "price",
        "input_id": "price",
        "input_placeholder": "Enter the price"
    },
    {
        "generalType": "file_upload",
        "label_for": "add your images",
        "type": "file",
        "input_name": "original_filename",
        "input_id": "original_filename",
        "input_placeholder": "upload your images here"
    },   
]
  
export default newProductForm;