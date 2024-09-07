class QuoteServiceImpl {
  public async getQuote(): Promise<string> {
    const url = `${process.env.API_URL}/quote`;
    const request = new Request(url, { method: 'GET' });

    return fetch(request)
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        }
        else {
          return res.json();
        }
      })
      .then((res) => res.quote as string)
      .catch(() => 'Unable to load quote...');
  }
}

export const QuoteService = new QuoteServiceImpl();