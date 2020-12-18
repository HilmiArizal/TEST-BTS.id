import Axios from 'axios';
import React, { Component } from 'react';
import { API_URL } from '../../Helpers';


class Checklist extends Component {

    state = {
        dataChecklist: [],
        name: '',
        itemName: ''
    }

    componentDidMount() {
        this.getChecklist();
    }

    getChecklist = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const headers = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
                const res = await Axios.get(API_URL + 'checklist', headers)
                this.setState({ dataChecklist: res.data.data })
                console.log(res.data.data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    onBtnAddItem = () => {
        let itemName = this.state
    }

    onBtnAdd = async () => {
        let name = this.state.name;
        let dataChecklist = { name };
        console.log(dataChecklist)
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const headers = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
                await Axios.post(API_URL + `checklist`, dataChecklist, headers);
                const res = await Axios.get(API_URL + 'checklist', headers)
                this.setState({ dataChecklist: res.data.data })
            }
        } catch (err) {
            console.log(err)
        }
    }

    onBtnDelete = async (checklistId) => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const headers = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
                await Axios.delete(API_URL + `checklist/${checklistId}`, headers)
                const res = await Axios.get(API_URL + 'checklist', headers)
                this.setState({ dataChecklist: res.data.data })
            }
        } catch (err) {
            console.log(err)
        }
    }

    renderGetDataChecklist = () => {
        return this.state.dataChecklist.map((item, index) => {
            return (
                <div>
                    {item.name} <span>  <button onClick={() => this.onBtnDelete(item.id)}>Delete</button></span>
                    <div style={{ display: 'flex', margin: '0 5%' }}>
                        {
                            item.items
                                ?
                                item.items.map((itemChild) => {
                                    return (
                                        <div>
                                            {itemChild.name}
                                        </div>
                                    )
                                })
                                :
                                ''
                        }
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderGetDataChecklist()}
                <div>
                    <input type="text" placeholder="childName" onChange={(e) => this.setState({ itemName: e.target.value })} />
                    <button onClick={this.onBtnAddItem}>Add Item</button>
                    <br />
                    <input type="text" placeholder="name" onChange={(e) => this.setState({ name: e.target.value })} />
                    <button onClick={this.onBtnAdd}>Add</button>
                </div>
            </div>
        );
    }
}

export default Checklist;