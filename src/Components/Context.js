import React from 'react'

export const DataContext = React.createContext();

export class DataProvider extends React.Component{
    state = {
        products:[
            {
                "_id": "1",
                "title": "Nike Shoes 01",
                "src": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExIVFRUXFxUVFxUWGBYWGBcYFxUYFxUVFxcZHSghGB0lHhUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDQ0OFQ8PFSsZFx0tMSstKy0rLS0tLSsrLSstKy0rNy0rNysrKystMS0tLS0tNzcrKy4tKystNy0tLS0rK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECAwQFBwj/xABAEAABAwEFBQUFBgUCBwAAAAABAAIDEQQSITFBBQZRYXEHEyIykVJigaHRFEKCscHwIyQzcuFzkhVDU2ODk9L/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAZEQEBAQEBAQAAAAAAAAAAAAAAEQESQSH/2gAMAwEAAhEDEQA/APcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFwt5t7LLYQO+cS52LY2C88jjTANGeJIyQd1Fxt3t57LbW1gkBdrG7wyN6t4cxUc12UBERARFHt897ItnxBzhfkebsUQNC936NFRU8xqQgkKL5725vtb5n1+0vjAybE4xtHpiR1JXQ3b7VLXA4NtP8zFqfCJWjk4UDujv9wQe6ItHYu14bXE2aB4ex2uRBGbXA4tcOBW8gIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg0dt7VjssEk8poyNt40zOjWjmSQB1XzVvPt+S3Wh9oc1rS6guh3haGgBo8RxOArlU1yUs7Xt+TO42OEjumuq8jEuc3LGtLuOVMxnoPKwKnEn4IOvBO5pDsRTJzTQtOhDhr0XvPZNvU+22d8czr00BaC7V7H17tx5+FwP9oJxK+dGRkGrH48DgfVSHdPfK1bNkc+NjDfDWvD21Dg0kjFpGOJx56oPqVF51u32wWG0ANnrZpPeq+Mnk9ow/EB1U1i23ZXRmVtohdGBUvEjC0DiSDggybX2nFZoXzzOuxsF5x/IAakmgA1JC+bNsbwy7QtclqkqAPDGzSNuN1o40BcSdXOrhkuv2ob5P2jL3UTrlkjPhLqgyuyMhbnShIa3hUnE0ENY4H+HHWg8zjpxPM8v0QZ5WmWpJIYDQAakZklaj7OAfCSD1+q2ZbSKBrcAAAP3x5rVLySAMzgEEn3D3wl2fOHGron0E0Yyc3LvG8Ht+eI1qPpGxWuOaNskbw9jwHNc01BByIXyZM0aZDAHpqvoPsdnidsyJsbiSxzxIHUq2Rzi8gAfdN4EcjjjVUTdERQEREBERAREQEREBERAREQEREBERAREQEREFHGmJXnfaB2iWeGN8EMneSkOa4xmt0jwll8eV1ddKHWi0O3q2tEEEN/F0hc6IVqWhpAeQNAcBXU4ZLwt9ePrhgguMniN7M4qkkercR0x+IVjYjpif3krWyEIKMw1W1FaiMMxzWMzB3mFeevqqdyNHev1CDZLWO0oeSoLI32z6j6LWMbhp6Gqy2OzyyvuRsc52dBoOLicGjmaIMxijbi5zncicPlRdSy7Ie+ITSu7iz08Bp4pCfKIo6itcfEaClTiKroWDZdnsje/tDhK8Hw0FWXvYiaf6z/ed4RnTCq4m29rTWqS+80AqGtrUMHAcSaCpOJPKgAc5zqZmp5LPC27ifMcOg+qwtIblieKtMyDYcSSGjX8tVL+zren7BbAXGkEtI5RoBWjJPwk16F3FRGJt0Y+Y58hwVGGp5DNUfX4KKKdmG2DatnQucavjHcvOtWYNJ5lpYfipWoCIiAiIgIiICIiAiIgIiICIiAiIgIiIC867Zd4LTZYYWWd5j74yXpG4OFwNusB+7W8TUUPhzW9v72iw7NcIu7Mszm3qVusYCSBfdiamho0DTGlRXwjejeya3zd7Oa4UYxtQxg4NBJpXMmuKDlWzaM0rr8rnvd7T3FzvU4rG0A1vE1Oo0+GoVWSU4EajMKRRbHjZs6a0OYDJIYRFex7thmAvCuRdR+PshvtFBGXsc3HMe0Mv8KolB8wr+fqrmyFpplyOv1VHBh908svRBTuQfK74H6qx4Lc/qPkujs3Ys0wvNo2LWZ9Ws5hurzgcG150Uk2dY4rPTugXyf8AWeBeB/7bMRH1xdjmg4tg3feaPtBdEw4hg/qu6NPkHN3oV3LVa4rNEBcDGHFkDDR0p9qR5xu+874BYNrbRbZyQaSTnG441bHXJ0p1drc9VErRaDI4ve4uc7EuJxP74DJUZtobTkmdfeamlGgCjWN9ljdB8zrVafeFWu6qigvBJWeNwbjqte8qsaSaAEnkg2O9JwCzGUNF0Hr1SGx0Hjdd5Nxd65D5rZjlYzyMoeJ8Tv30QTzsq3xbs9srLQx/dyOY4FtCWkVD3EVqRS5lj4V7xZ52yNa9hDmuAc1wxBaRUEciCvkuaZ2ZrQ58V7D2Qb7wd0LDPMGyMcRC55wkY41EYccLzSSA3UXaVxoHq6IiAiIgIiICIiAiIgIiICIiAiIgLi7z702awR3530Jrcjbi99M7reHM0A1Kw78byjZ1lM9zvDeaxra0FXVxcaYDA9TQar5z3v29JtC0unkABc1oDGkm61jaUFdCbzvxFBm373gZb7VLO1pa11wNa41d4GhoyyrTJcDFtCKU5adQjWDNgB4imPOnEdMUHFhIPA/ofqgz7OsYtE0cTfCZHtaSMgCQHO5UFT8F6BbBHNHJA7wRPa1rS0V7vuyDCQ3UNugU1Che687W2yEuo3x3Tpi9rowSNKFwNVK5KioOBBII1BGBCCOndW0A3e8szme0ZRTrSl8H8K3bJsSzQ4n+Yf74uxDpHm/8WHJdBzlTuwGmSRwjjGb3ZdGjN7uQVFC6SZwGLjkBhQAcBk0D4Bcnam3mw1ZZ3Bz8nTjFreLYeJ9/04rR21vCZAYoQY4Tg725f9QjJvuDDjVcE0QXPNampJNSa4knUk6lWKtEayqgtV8cROlBxKzMYB9eCtknA5/kgubC0Z4/If5V5tAGA9BgtUyucaDXCg1rpzUn2ZuLaHhr7QW2WN2TrQe7c7Mm5Ef4jjQE+UAgZqjgiautOSyMlNQ1rS5xwAAJJPAAYlTU7P2dZWgxxvtbwTefJWGIBgN5zI2kueMABfdQ1BoRnz7ZH4SI7jWk0eGUY1zSwh7XE4hhF2mPhL89RcwR5sb3SGKS80jNgzrgaH4FbH2dgeI3AAEeXrlUrYddD3uBqS4uLssSan5npwT7F30jQGEvwAArjjgCBrU8j0zVV7t2S7xutVk7mUuM1npG5zsS9hr3TycybraOrq0nVTlRHs43U+wQEv8A60tHSe6B5WDpUk8zyClywgiIgIiICIiAiIgIiICIrXvDQSSAAKknAADMk6ILlwd697LNs+O9M6ryDcibS++nAaDi44fGgUM317WYoaxWKksmRmOMbf7B988/L1yXi+09py2iR0k0jpHuNS5xqf8AA4DIaIOzvvvjPtF4MpAjaSY4h5WVoKk0q80GZ4mlK0UZbQZjo4YEfVUJqrWvoeKDI/ifg8a9Rx/eKtf72HvDGvXj+aVp5dcxp8QgPDDi0+UoKOOFHAOHEfXP4FSax70NcAJ2OkIAAkjLRI4DAB7XeF594EE4KL1pl4TwORVjqdD8kErn3phaP4UDnO4zuaGjncj83QuCju09pSzuvSvvEYNGAa0cGNGDRl6YrUc7iqxxF2XroOqCyqua2qziBo5n95BHPA+iC0RcfRHSAfvBdLZe79qtJAjjIaRW86oFPapm4cSAujJZNmWT+s91tlH/ACoXXIQeD5m4u6x9CEEdsdkmtDrkMb5HDEhrSbo9o6NHvGg5rasuzYWyNbPLeJNCyAtdQ6AzGrB+EPXVtu35bVA2NoZEwPP8tA3u4qZhxYPOcvE6prXFcKWxEOq51KY9CtQSexbSLIpBZWMsklXRxvjBdM4taXSB1oeS9tQAPCWCpGGi6Nt2iKkPdQuF6rq4ggVI6ux+HIkRX/iNQ0NbUtqQ4V8xdUuqcjWmXALAyF8jqF4BNTmASeF52pw9VbniOha9uuDQPCX3W3v761ccD0wy5FalnfI5uTgwYZkgfhphnyUm3U3BtdqaXR2YtbeYBJK4MBBqXOaCCXYXcsPEvT9g9ktmib/MyPndUEtwZGKaADxdfFjwU3VeTbA2BPapO7hYS6gJOoByPuA44mmuJXtu4+4sViAe8B03HMN6cTz9OJlGz9nxQNuQxsjbnRoAqdSaZnmcVtKAiIoCIiAiIgIiICIiAio40xXiW/fa3I9zobAbkYqDaPvv/wBL2G+9mdKah6TvZvvZLAKSvvS0qIWULzwLtGDm6nKq8N3w3+tVvJa53dw6QsJu4auOch64cAFE5rQ5xLnEkk1JJJJJzJJxJ5rFeQXudVYyqXlaSguTA6qyqVQVukISrbyuaC40AqgV+IRjC4gAEngszYAMXn8Lf1K2LOJJTchjcaCpbGCTQZl50GeJNEGEWVrfOan2W/q76LMwPk8LG4DQZD/PXNbuz7LZWOra5wAMe7ia6Qu5Bwo2vVwHM5LpSb1vc10dgjFkYML4oZ3A4H+IP6deDBXmqIyRjQktFaF1D8c6LqwWqzQf0WOtMvtUcyIH+4gSPFeAiOGZXObZ2gkuJc7Mk4knit/Z1jlncI7PE+R3ssBcacTTIc8kGPaVvtlpF2WQMjrXum0ZH1LGec+84l3Nc/uY2Z1efQBeq7v9kFqlo61SNgafuNpJL0J8rfV3RejbA7O9nWSjmQCR4x7yb+I6vEA+Fh/tASj5/wBi7s7QtdPs1leWGlH0DWEHUSOLWn4Eldqx9l20HWju32c0Faylze7wbUXSfNU0GAOfIkfSNESjx/d3scNQ+1y3MD/ChN4gkUB7wjDjQA5DFT/YO5disjQI4WudhWSQNe80yxoAKcgFIUUBERAREQEREBERAREQEREBERBHu0C//wAPtFxxaSyl4VqGlwDstKE15VXy/PEQSDmCQvr6WMOaWuFQQQRxBFCF889pu6JsU9WVMTwXMceXmaeJbUVPAg8VRACrCtp8PMLEYeaDCVatjueaEsHD4n9EGssjbM450A5mnyzWR1sAyy4AUWubTXIeqDO2Jg4u+Q+quknphUNHAfQLUZ3jtDTjl81b3dCS7T80Gx9qaMm15v8A0aD+ZK7O097p54W2WNkdns+AMcLS0yc5Xk1f0FG8sBThGz1oQflipBsHc+22i6YbNLIHZPukMPGkjqM+aDjyQMoAK1A8V4ggnPDAUHLmt7YeyLRO8QwsdK8itxgGAriSSMBiMTQYr3rY/ZhYxZomTxkyhje9LJHUdJm4g0BAqdKZDgpZsPYVlsbLlniZGMKkYudTVzji74lB5Jud2SyyOD7e3uoqVETXDvHGooHEVutpXW9lkvYdk7IgssYjgiZGzg0UqeLjm48zUrcqlVBVFS8FS+OIQXIrb44j1QPHEILkVt8cQq3hxQVRUql4IKoqVVUBERAREQEREBERAREQWveAKk0C4W8tms1rhdDLeIOLXNHiY6lA5t7DU8iCQu+sboGnNoPwCD5o3p3LmspLqCSOuEjcxye3NvzHNcOS641MbT+XoDT5L6h2hu1ZJ8JYQ74uH5ELiT9l+ynGpsxB92a0N/KRWj50fZmPNxsIL8KBta49D+eHFYIYGguaWCozaTeppga0K+jouy3ZjSS2KVpIoaTz5cPOtV/Y/ssmoZM0n2ZpP1KUfPpszMfD+awPZdIrShoRT7vAlfQzexzZgNR9o/8AaTXqCDVH9j2zSa1tAP8AqD9WpR4JZrC+Z4YzxEmg8TQP9ziApzuZusbNN3tqZERcIZGbslHOIq44FuDbwzPmOVMfRoeySwNIIfaKj32//C7Eu5NmddvPmN3AeMepo1BBbLuns6/3gs7anG6S4xj/AMZN2nKlOSmMdtkoAH4UoBoOAFNF0Yt07O2lL+Hvf4W5DsSFuQPxJUur8cQzyH7xVL8ntFSJuzIh935n6q8WGP2fmUEarJxKqGv4lSgWZg+6PRV7po+6PQJRFwHcSrmscePzUoAHBKqdYIwbO/g70P0Vwssvsu9CpMEqrURs2SXg70Kq2xS8HehUjqlU6wR0WKX2SrvsEujT6j6qQVSqnQ4kWz5f2Qt2CxvH3qdKreCJ0KMaRrVXKgVUoIqVSqXBVFRFRVERAREQEREBERAREQEREBERAREQEREBERBSiURFOcCiUREgUSiIkwKJRESYFEoiJMCiUREgUSiIkwKIiKj/2Q==",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Nike Shoes 02",
                "src": "https://cdn-images.farfetch-contents.com/12/96/02/51/12960251_13710093_600.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike Shoes 03",
                "src": "https://5.imimg.com/data5/WQ/UJ/MY-36868853/nike-zoom-pegasus-33-mens-running-shoes-250x250.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nike Shoes 04",
                "src": "https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOONIKE-FLEX-RNANS-670716B3C1CA7/1563348469726_0..jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Nike Shoes 05",
                "src": "https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOONIKE-MEN-S-RSOOP1570772DA0B3A2/1576331599238_0.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Nike Shoes 06",
                "src": "https://images-na.ssl-images-amazon.com/images/I/71X9n6XkhgL._UX500_.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart:[],
        total:0

    };

    addCart = id => {
        const{products,cart} = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })
        if(check){
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({
            cart:[...cart,...data]
        })
        }
        else{
            alert("The product has been added to cart")
        }
    };

    reduction = id => {
        const {cart} = this.state;
        cart.forEach(item => {
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({
            cart:cart
        });
        this.getTotal();
    };
    
    increase = id => {
        const {cart} = this.state;
        cart.forEach(item => {
            if(item._id === id){
                item.count +=1;
            }
        })
        this.setState({
            cart:cart
        });
        this.getTotal();
    };

    getTotal = () => {
        const {cart} = this.state;
        const res = cart.reduce((prev,item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({
            total:res
        });
    };

    removeProduct = id => {
        const {cart} = this.state;
        cart.forEach((item,index)=> {
            if(item._id === id){
                cart.splice(index,1)
            }
        })
        this.setState({
            cart:cart
        });
        this.getTotal();
    };

    componentDidUpdate(){
        localStorage.setItem('dataCart',JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal',JSON.stringify(this.state.total))
    }

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({
                cart:dataCart
            });
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({
                total:dataTotal
            });
        }
    }

    render(){
        const {products,cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return(
            <DataContext.Provider value={{products,addCart,cart,reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}