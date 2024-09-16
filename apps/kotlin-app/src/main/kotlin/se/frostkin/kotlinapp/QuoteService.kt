package se.frostkin.kotlinapp

import com.google.gson.Gson
import okhttp3.*
import java.io.IOException

class QuoteService {
    private val client = OkHttpClient();

    fun getQuote(): String? {
        val request = Request.Builder()
            .url("http://localhost:4001/quote")
            .build()

        try {
            val response = this.client.newCall(request).execute()
            if (response.body != null) {
                val gson = Gson()
                val quote = gson.fromJson(response.body!!.string(), Quote::class.java)
                return quote.quote
            } else {
                return "Failed to load quote."
            }
        } catch (e: IOException) {
            return "Failed to load quote."
        }
    }
}