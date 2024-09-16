module se.frostkin.kotlinapp {
  requires javafx.controls;
  requires javafx.fxml;
  requires kotlin.stdlib;
  requires okhttp3;
  requires com.google.gson;

  opens se.frostkin.kotlinapp to javafx.fxml, com.google.gson;

  exports se.frostkin.kotlinapp;
}