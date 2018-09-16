import {observable} from 'mobx';

class Store {
    @observable
    list = [];
}

export default new Store();