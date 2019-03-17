devices = [{
        "moduleID": "Y5K8B4",
        "mapped": "Arcu Associates",
        "type": "709",
        "status": "active"
    },
    {
        "moduleID": "X1J1F7",
        "mapped": "Mauris A Nunc LLP",
        "type": "879",
        "status": "active"
    },
    {
        "moduleID": "V1A8P7",
        "mapped": "Accumsan Interdum Libero Associates",
        "type": "832",
        "status": "active"
    },
    {
        "moduleID": "X1K5W3",
        "mapped": "Tincidunt Company",
        "type": "715",
        "status": "active"
    }
]

function genDevices(){
    for(device in devices){
        document.querySelector('.devices--cont__table tbody').innerHTML+=`<tr>
        <td>`+devices[device].moduleID+`</td>
        <td>`+devices[device].mapped+`</td>
        <td>`+devices[device].type+`</td>
        <td class="status">`+devices[device].status+`</td>
      </tr>`;
    }
}