const storage = window.localStorage;
export default {

   save: function (key,value) {
   	 storage.setItem(key,JSON.stringify(value));
   },
   read: function (key) {
   	 let mData = storage.getItem(key) || [];
   	 mData = JSON.parse(mData);
   	 return mData;
   }
}
