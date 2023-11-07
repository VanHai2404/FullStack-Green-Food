package com.edu.shop.controller;


import java.util.*; 
import java.io.*;

class Test {

  public static String MathChallenge(int num) {
    // code goes here  
    int a = 0;
    int b = 1;
    while(b< num ){
      int temp =b;
      b=a+b;
      a=temp;
    }
    if(b==num){
      return "yes";
    }else{
      return "no";
    }
  }

  public static void main (String[] args) {  
       
    Scanner s = new Scanner(System.in);
    String input =s.nextLine();
    int num =Integer.parseInt(input);
    System.out.print(MathChallenge(num)); 
   

}
}