from config.app import app

if __name__ == '__main__':
    app.run(debug=True, ssl_context="adhoc", host="0.0.0.0", port=8080)
