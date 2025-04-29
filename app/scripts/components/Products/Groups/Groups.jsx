import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Button from '../Button/Button';
import Product from '../Product/Product';

import './Groups.scss';

const Groups = (props) => {
    const [updateProducts, setUpdateProducts] = useState(true);
    const [groups, setGroups] = useState([]);
    const [products, setProducts] = useState([]);
    const [groupName, setGroupName] = useState('');
    const [productTab, setProductTab] = useState();

    useEffect(() => {
        if(props.match.params.group) {
            getProducts();
            setUpdateProducts(false);
        }
        getGroups(props.slug);
        const productTab = document.querySelector('.product__tabs--tablist > li:first-child > a');
        productTab.classList.add('selected');
    }, []);

  const getGroups = () => {
    const url = '/api/products/category/' + this.props.match.params.family;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-requested-with': 'XMLHttpRequest'
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ groups: data[1] })
    })
  }

  const getProducts = () => {
    const url = '/api/products/group/' + this.props.match.params.group;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-requested-with': 'XMLHttpRequest'
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ groupName: data[0], products: data[1] });
      setTimeout(() => {
        this.updateProducts = true
      }, 800);
    })
  }
  componentDidMount() {
    if(this.props.match.params.group) {
      this.getProducts();
      this.updateProducts = false;
    }
    this.getGroups(this.props.slug);
    this.productTab = document.querySelector('.product__tabs--tablist > li:first-child > a');
    this.productTab.classList.add('selected');
  }

  componentDidUpdate() {
    if(this.props.match.params.group) {
      if(this.updateProducts) {
        this.getProducts();
        this.updateProducts = false;
      }
    }
  }

  componentWillUnmount() {
    this.productTab.classList.remove('selected');
  }

  render() {
    return <>
    <section className="groups">
      <ul className="groups__list" role="list">
        {this.state.groups.map((group,index) =>
          <Button key={index} route={this.props.match.params.family + '/' + group.Slug} name={group.Title}/>
        )}
      </ul>
      <ul className="products__list" role="list">
      {this.state.products.map((product, index) =>
        <Product key={index} image={product.ImageFilename} code={product.Code} title={product.Title} />
      )}
      </ul>
    </section>
    </>
  }
}

export default Groups;
