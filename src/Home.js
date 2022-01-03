import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (

      <div>
          
      <div className="navbar">
        <h1> Cake Shop</h1>
        <div className="btn">
          <Link to = "/login">
            <span>
              <button> Login </button>
            </span>
          </Link>
          <Link to ="/usualinfo">
            <span>
              <button> SignUp </button>
            </span>
          </Link>
        </div>
      </div>

      <div className="content">
        <b>
          Cake is a form of sweet food made from flour, sugar, and other
          ingredients, that is usually baked. In their oldest forms, cakes were
          modifications of bread, but cakes now cover a wide range of
          preparations that can be simple or elaborate, and that share features
          with other desserts such as pastries, meringues, custards, and pies.
          The most commonly used cake ingredients include flour, sugar, eggs,
          butter or oil or margarine, a liquid, and a leavening agent, such as
          baking soda or baking powder. Common additional ingredients and
          flavourings include dried, candied, or fresh fruit, nuts, cocoa.
        </b>
        <div className = "cake-images">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg"
            alt="cake"
          />

          <img  src = "https://hpbd.name/uploads/worigin/2021/07/07/chocolate-birthday-wishes-cake-with-name-edit_2482a.jpg"/>
        </div>
        <b>
          Cake is a form of sweet food made from flour, sugar, and other
          ingredients, that is usually baked. In their oldest forms, cakes were
          modifications of bread, but cakes now cover a wide range of
          preparations that can be simple or elaborate, and that share features
          with other desserts such as pastries, meringues, custards, and pies.
          The most commonly used cake ingredients include flour, sugar, eggs,
          butter or oil or margarine, a liquid, and a leavening agent, such as
          baking soda or baking powder. Common additional ingredients and
          flavourings include dried, candied, or fresh fruit, nuts, cocoa.
        </b>
      </div>
      <section> </section>
    </div>
  );
};

export default Home;
