FROM golang:1.16-alpine
WORKDIR /app
COPY go.sum ./
COPY go.mod ./
RUN go mod download
COPY main.go ./
COPY ./controllers/quote-controller.go ./controllers/
COPY ./models/quote.go ./models/
RUN go build -o /go-api