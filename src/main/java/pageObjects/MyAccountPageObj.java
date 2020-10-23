package pageObjects;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import core.Base;
public class MyAccountPageObj extends Base {
	public MyAccountPageObj() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(xpath = "//h2[contains(text(),'My Account')]")
	private WebElement myAccountText;
	@FindBy(xpath = "//h2[contains(text(),'My Orders')]")
	private WebElement myOrdersText;
	public boolean isMyAccountDisplayed() {
		if (myAccountText.isDisplayed())
			return true;
		else
			return false;
	}
	public boolean isMyOrdersDisplayed() {
		if (myOrdersText.isDisplayed())
			return true;
		else
			return false;
	}
}
