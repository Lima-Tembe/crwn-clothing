import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          imageUrl: "images/hats.png", // local file in public/images/
          id: 1,
          linkUrl: "hats",
          //linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          imageUrl: "images/jackets.png", // local file in public/images/
          id: 2,
          linkUrl: "",
          //linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          imageUrl: "images/sneakers.png", // local file in public/images/
          id: 3,
          linkUrl: "",
          //linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          imageUrl: "images/womens.png", // local file in public/images/
          size: "large",
          id: 4,
          linkUrl: "",
          //linkUrl: "shop/womens",
        },
        {
          title: "mens",
          // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          imageUrl: "images/men.png", // local file in public/images/
          size: "large",
          id: 5,
          linkUrl: "",
          //linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
