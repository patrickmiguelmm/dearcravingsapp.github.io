import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/payment")
public class PaymentServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Handle the payment process here
        String paymentToken = request.getParameter("paymentToken");
        
        // Send the payment token to the payment gateway API and process the payment
        
        // Redirect the user to a thank you page or order confirmation page
        response.sendRedirect("thankyou.html");
    }
}
