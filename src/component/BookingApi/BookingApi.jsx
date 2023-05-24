import React, { useEffect,useState } from 'react'
import axios from 'axios'
const BookingApi = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
    const data = {
        "room_name_readonly": "0",
        "room_id": "1008707301",
        "roomtype_id": "9",
        "room_name_id": "67",
        "custom_room_name": "",
        "num_rooms": "1",
        "no_smoking": "1",
        "num_bedrooms": "1",
        "num_livingrooms": "0",
        "num_diningrooms": "0",
        "num_kitchens": "0",
        "number_of_floors_in_building": "",
        "bedtype_id_SINGLE_1": "1",
        "bed_number_SINGLE_1": "2",
        "bedtype_id_SINGLE_2": "1",
        "bed_number_SINGLE_2": "0",
        "bedtype_id_SINGLE_3": "1",
        "bed_number_SINGLE_3": "0",
        "bedtype_id_2_SINGLE_1": "",
        "bed_number_2_SINGLE_1": "0",
        "bedtype_id_2_SINGLE_2": "",
        "bed_number_2_SINGLE_2": "0",
        "bedtype_id_2_SINGLE_3": "",
        "bed_number_2_SINGLE_3": "0",
        "uses_alternative": "0",
        "bedtype_id_bedroom_1_1": "",
        "bed_number_bedroom_1_1": "0",
        "bedtype_id_bedroom_1_2": "",
        "bed_number_bedroom_1_2": "0",
        "bedtype_id_bedroom_1_3": "",
        "bed_number_bedroom_1_3": "0",
        "experiment_num_guests_in_bedroom_1": "0",
        "bedtype_id_bedroom_2_1": "",
        "bed_number_bedroom_2_1": "0",
        "bedtype_id_bedroom_2_2": "",
        "bed_number_bedroom_2_2": "0",
        "bedtype_id_bedroom_2_3": "",
        "bed_number_bedroom_2_3": "0",
        "experiment_num_guests_in_bedroom_2": "0",
        "bedtype_id_bedroom_3_1": "",
        "bed_number_bedroom_3_1": "0",
        "bedtype_id_bedroom_3_2": "",
        "bed_number_bedroom_3_2": "0",
        "bedtype_id_bedroom_3_3": "",
        "bed_number_bedroom_3_3": "0",
        "experiment_num_guests_in_bedroom_3": "0",
        "bedtype_id_bedroom_4_1": "",
        "bed_number_bedroom_4_1": "0",
        "bedtype_id_bedroom_4_2": "",
        "bed_number_bedroom_4_2": "0",
        "bedtype_id_bedroom_4_3": "",
        "bed_number_bedroom_4_3": "0",
        "experiment_num_guests_in_bedroom_4": "0",
        "bedtype_id_bedroom_5_1": "",
        "bed_number_bedroom_5_1": "0",
        "bedtype_id_bedroom_5_2": "",
        "bed_number_bedroom_5_2": "0",
        "bedtype_id_bedroom_5_3": "",
        "bed_number_bedroom_5_3": "0",
        "experiment_num_guests_in_bedroom_5": "0",
        "bedtype_id_bedroom_6_1": "",
        "bed_number_bedroom_6_1": "0",
        "bedtype_id_bedroom_6_2": "",
        "bed_number_bedroom_6_2": "0",
        "bedtype_id_bedroom_6_3": "",
        "bed_number_bedroom_6_3": "0",
        "experiment_num_guests_in_bedroom_6": "0",
        "bedtype_id_bedroom_7_1": "",
        "bed_number_bedroom_7_1": "0",
        "bedtype_id_bedroom_7_2": "",
        "bed_number_bedroom_7_2": "0",
        "bedtype_id_bedroom_7_3": "",
        "bed_number_bedroom_7_3": "0",
        "experiment_num_guests_in_bedroom_7": "0",
        "bedtype_id_bedroom_8_1": "",
        "bed_number_bedroom_8_1": "0",
        "bedtype_id_bedroom_8_2": "",
        "bed_number_bedroom_8_2": "0",
        "bedtype_id_bedroom_8_3": "",
        "bed_number_bedroom_8_3": "0",
        "experiment_num_guests_in_bedroom_8": "0",
        "bedtype_id_bedroom_9_1": "",
        "bed_number_bedroom_9_1": "0",
        "bedtype_id_bedroom_9_2": "",
        "bed_number_bedroom_9_2": "0",
        "bedtype_id_bedroom_9_3": "",
        "bed_number_bedroom_9_3": "0",
        "experiment_num_guests_in_bedroom_9": "0",
        "num_bedrooms_readonly": "1",
        "num_bathrooms": "1",
        "num_bathrooms_readonly": "1",
        "num_commonspaces": "0",
        "num_commonspaces_readonly": "0",
        "num_ensuites": "0",
        "num_ensuites_readonly": "0",
        "num_bathrooms_in_bedroom_1": "",
        "num_bathrooms_in_bedroom_2": "",
        "num_bathrooms_in_bedroom_3": "",
        "num_bathrooms_in_bedroom_4": "",
        "num_bathrooms_in_bedroom_5": "",
        "num_bathrooms_in_bedroom_6": "",
        "num_bathrooms_in_bedroom_7": "",
        "num_bathrooms_in_bedroom_8": "",
        "num_bathrooms_in_bedroom_9": "",
        "num_bathrooms_in_commonspace_1": "",
        "num_bathrooms_in_commonspace_2": "",
        "num_bathrooms_in_commonspace_3": "",
        "num_bathrooms_in_commonspace_4": "",
        "num_bathrooms_in_commonspace_5": "",
        "num_bathrooms_in_commonspace_6": "",
        "num_bathrooms_in_commonspace_7": "",
        "num_bathrooms_in_commonspace_8": "",
        "num_bathrooms_in_commonspace_9": "",
        "bathroomtype_id": "1",
        "bathroom_type_id_bedroom_1": "",
        "bathroom_type_id_bedroom_2": "",
        "bathroom_type_id_bedroom_3": "",
        "bathroom_type_id_bedroom_4": "",
        "bathroom_type_id_bedroom_5": "",
        "bathroom_type_id_bedroom_6": "",
        "bathroom_type_id_bedroom_7": "",
        "bathroom_type_id_bedroom_8": "",
        "bathroom_type_id_bedroom_9": "",
        "bathroom_type_id_commonspace_1": "",
        "bathroom_type_id_commonspace_2": "",
        "bathroom_type_id_commonspace_3": "",
        "bathroom_type_id_commonspace_4": "",
        "bathroom_type_id_commonspace_5": "",
        "bathroom_type_id_commonspace_6": "",
        "bathroom_type_id_commonspace_7": "",
        "bathroom_type_id_commonspace_8": "",
        "bathroom_type_id_commonspace_9": "",
        "bathroom_type_id_readonly": "1",
        "bedroom1bathroom_is_ensuite": "0",
        "bedroom2bathroom_is_ensuite": "0",
        "bedroom3bathroom_is_ensuite": "0",
        "bedroom4bathroom_is_ensuite": "0",
        "bedroom5bathroom_is_ensuite": "0",
        "bedroom6bathroom_is_ensuite": "0",
        "bedroom7bathroom_is_ensuite": "0",
        "bedroom8bathroom_is_ensuite": "0",
        "bedroom9bathroom_is_ensuite": "0",
        "commonspace1bathroom_is_ensuite": "0",
        "commonspace2bathroom_is_ensuite": "0",
        "commonspace3bathroom_is_ensuite": "0",
        "commonspace4bathroom_is_ensuite": "0",
        "commonspace5bathroom_is_ensuite": "0",
        "commonspace6bathroom_is_ensuite": "0",
        "commonspace7bathroom_is_ensuite": "0",
        "commonspace8bathroom_is_ensuite": "0",
        "commonspace9bathroom_is_ensuite": "0",
        "bathroom_type_ensuite_bedroom_1": "",
        "bathroom_type_ensuite_bedroom_2": "",
        "bathroom_type_ensuite_bedroom_3": "",
        "bathroom_type_ensuite_bedroom_4": "",
        "bathroom_type_ensuite_bedroom_5": "",
        "bathroom_type_ensuite_bedroom_6": "",
        "bathroom_type_ensuite_bedroom_7": "",
        "bathroom_type_ensuite_bedroom_8": "",
        "bathroom_type_ensuite_bedroom_9": "",
        "bathroom_type_ensuite_commonspace_1": "",
        "bathroom_type_ensuite_commonspace_2": "",
        "bathroom_type_ensuite_commonspace_3": "",
        "bathroom_type_ensuite_commonspace_4": "",
        "bathroom_type_ensuite_commonspace_5": "",
        "bathroom_type_ensuite_commonspace_6": "",
        "bathroom_type_ensuite_commonspace_7": "",
        "bathroom_type_ensuite_commonspace_8": "",
        "bathroom_type_ensuite_commonspace_9": ""
     }
    //  const response = async ()=>{
    //   
    //  }
    useEffect(() => {
      const getCORSAnywhereData = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/bookget-api`,data);
          console.log(response);
          setData1(response.data);
        } catch (error) {
          console.error('Error:', error);
        }
        try {
          const response = await axios.post(`http://localhost:8000/postbook-api`);
          console.log(response.data);
          setData2(response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      getCORSAnywhereData();
    }, []);
    //   response()
    //  axios.post('https://admin.booking.com/hotel/hoteladmin/extranet_ng/manage/json/rooms.json', data)
    //  .then(response => {
    //    console.log('Success:', response.data);
    //  })
    //  .catch(error => {
    //    console.error('Error:', error);
    //  });
  return (
    <div>BookingApi</div>
  )
}

export default BookingApi