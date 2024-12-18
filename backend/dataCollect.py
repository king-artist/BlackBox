def fetch_market_data(symbol, start_date, end_date):
    # Example with Alpha Vantage API
    api_key = "YOUR_API_KEY"
    url = f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol={symbol}&apikey={api_key}&outputsize=full"
    response = requests.get(url)
    data = response.json()
    return preprocess_data(data, start_date, end_date)
