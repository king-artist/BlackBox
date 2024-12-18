def preprocess_data(data, start_date, end_date):
    df = pd.DataFrame(data)
    df['Date'] = pd.to_datetime(df['Date'])
    df = df[(df['Date'] >= start_date) & (df['Date'] <= end_date)]
    df['Daily Return'] = df['Close'].pct_change()
    df.fillna(method='ffill', inplace=True)
    return df
