package com.edu.shop.controller.site;
import java.util.*; 
import java.io.*;

class Main {

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
    if(s.hasNextInt()){
      int num = s.nextInt();
     System.out.print(MathChallenge(num)); 
    }else{
      
           System.out.print("Not ----"); 
    }
    s.close;
  }

}