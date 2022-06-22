import requests


def handler(event, context):
    response = requests.get("https://api.ipify.org?format=json")
    print(response.text)
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'text/plain'
        },
        'body': f"You have hit {event['path']}\n"
                f"IP of lambda server: {response.json().get('ip', None)}"
    }