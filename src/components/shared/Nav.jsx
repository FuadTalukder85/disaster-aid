import Image from "next/image";
import logo from "../../../public/disaster-aid.png";
import Container from "../Container";
const menus = ["Home", "Donation", "Crisis", "Volunteer", "Inventory"];
const Nav = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-5">
        <Image src={logo} alt="logo" width={200}></Image>
        <div>
          <ul className="flex justify-between items-center gap-5 text-primary font-semibold">
            {menus?.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex justify-between items-center text-primary font-semibold gap-5">
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Nav;
