import Recipes from '../components/recipes';
import Sidebar from '../components/sidebar';
import React, { Component } from 'react';
import style from '../styles/myRecipes.module.css';
import { Montserrat } from "next/font/google";
import ShowFullRecipe from '../components/showFullRecipe'


export const montserrat = Montserrat({subsets: ['latin']})

export class MyRecipe extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            recipes: [
                {
                    id: 1,
                    title: 'Шаурма',
                    img: 'image-1.jpg',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Мука',
                            weight: '300 г.',
                        },
                        {
                            id: 2,
                            name: 'Сахар',
                            weight: '250 г.',
                        },
                        {
                            id: 3,
                            name: 'Яйцо',
                            weight: '3 шт.',
                        },
                        {
                            id: 4,
                            name: 'Яблоко',
                            weight: '3 шт.',
                        },
                        {
                            id: 5,
                            name: 'Ванилин',
                            weight: 'по вкусу',
                        },
                        {
                            id: 6,
                            name: 'Сода пищевавя',
                            weight: '2 г.',
                        }
                    ],
                    calories: 350,
                    proteins: null,
                    fats: null,
                    carbohydrates: null,
                    desc: '1. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.\
                    2. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.\
                    3. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.\
                    4. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.',
                
                },
                {
                    id: 2,
                    title: 'Шарлотка с яблоками',
                    img: 'image-2.jpg',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Мука',
                            weight: '300 г.',
                        },
                        {
                            id: 2,
                            name: 'Сахар',
                            weight: '250 г.',
                        },
                        {
                            id: 3,
                            name: 'Яйцо',
                            weight: '3 шт.',
                        },
                        {
                            id: 4,
                            name: 'Яблоко',
                            weight: '3 шт.',
                        },
                        {
                            id: 5,
                            name: 'Ванилин',
                            weight: 'по вкусу',
                        },
                        {
                            id: 6,
                            name: 'Сода пищевавя',
                            weight: '2 г.',
                        }
                    ],
                    calories: 350,
                    proteins: null,
                    fats: null,
                    carbohydrates: null,
                    desc: '1. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.\
                    2. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.\
                    3. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.\
                    4. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.',
                },
                {
                    id: 3,
                    title: 'Шарлотка',
                    img: 'image-2.jpg',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Мука',
                            weight: '300 г.',
                        },
                        {
                            id: 2,
                            name: 'Сахар',
                            weight: '250 г.',
                        },
                        {
                            id: 3,
                            name: 'Яйцо',
                            weight: '3 шт.',
                        },
                        {
                            id: 4,
                            name: 'Яблоко',
                            weight: '3 шт.',
                        },
                        {
                            id: 5,
                            name: 'Ванилин',
                            weight: 'по вкусу',
                        },
                        {
                            id: 6,
                            name: 'Сода пищевавя',
                            weight: '2 г.',
                        }
                    ],
                    calories: 350,
                    proteins: null,
                    fats: null,
                    carbohydrates: null,
                    desc: '1. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.\
                    2. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.\
                    3. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.\
                    4. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.',
                
                },
                {
                    id: 4,
                    title: 'Шарлотка',
                    img: 'image-2.jpg',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Мука',
                            weight: '300 г.',
                        },
                        {
                            id: 2,
                            name: 'Сахар',
                            weight: '250 г.',
                        },
                        {
                            id: 3,
                            name: 'Яйцо',
                            weight: '3 шт.',
                        },
                        {
                            id: 4,
                            name: 'Яблоко',
                            weight: '3 шт.',
                        },
                        {
                            id: 5,
                            name: 'Ванилин',
                            weight: 'по вкусу',
                        },
                        {
                            id: 6,
                            name: 'Сода пищевавя',
                            weight: '2 г.',
                        }
                    ],
                   
                    calories: 350,
                    proteins: null,
                    fats: null,
                    carbohydrates: null,
                    desc: '1. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.\
                    2. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.\
                    3. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.\
                    4. Возьмите четыре небольших яблока, предпочтительно кислых сортов, нарежьте их дольками и поместите в просторную миску. Затем добавьте к яблокам пару столовых ложек сахара и немного корицы, чтобы придать блюду дополнительный аромат и сладость, подготавливая таким образом начинку для теста классической шарлотки.',
                
                },
                {
                    id: 5,
                    title: 'Шаурма',
                    img: 'image-2.jpg',
                    ingredients: [
                        {
                            id: 1,
                            name: 'Мука',
                            weight: '300 г.',
                        }
                    
                    ],
                    calories: 350,
                    proteins: null,
                    fats: null,
                    carbohydrates: null,
                    desc: ''
                }
            ],
            showFullRecipe: false,
            fullRecipe: {}
        }
        this.onShowRecipe = this.onShowRecipe.bind(this)
    }
    render(){
    return(
        <main>
            <div className={montserrat.className}>
            <div className={style.menu}>
            <div className={style.header}></div>
                <div className={style.wrapper_menu}>
                    <div className={style.menu_sidebar}>
                    <Sidebar />
                    </div>
                    <div>
                        <div className={style.title}>Все рецепты</div>
                        <Recipes onShowRecipe={this.onShowRecipe} recipes={this.state.recipes} />
                    </div>

                    {this.state.showFullRecipe && <ShowFullRecipe onShowRecipe={this.onShowRecipe} recipe={this.state.fullRecipe}/>}
                </div>
            </div>
        </div>
        </main>
    )
    }

    onShowRecipe(recipe){
        this.setState({fullRecipe: recipe})
        this.setState({showFullRecipe: !this.state.showFullRecipe})
    }
}

export default MyRecipe;