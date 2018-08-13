import { withRouter } from "next/router";
import { Flex } from "grid-styled";

const Product = withRouter(props => {
  return (
    <Flex is="ul" flexWrap="wrap" alignItems="center">
      {props.router.query.id}
    </Flex>
  );
});

export default Product;
