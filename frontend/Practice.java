import java.util.*;

import javax.sql.rowset.spi.SyncResolver;
 
public class Practice {

    public static void g(int a)
    {
        int s=0;
        int c=0;
        int d=1;
        
        System.out.print("0 1 ");
        for(int i=0;i<=a;i++)
        {
            s=c+d;
            System.out.print(s+" ");
            c=d;
            d=s;

            
            
            
        }

    }
   public static void main(String args[]) 
   {

    Scanner sc = new Scanner(System.in);
    int x = sc.nextInt();
    g(x);
    //System.out.println(z);

   }   
}
