import Card from "./Card";

function DateContainer({ date, dateData }) {

    function formatDate(newDate) {
        const months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December',
        }
        const d = newDate
        const year = d.getFullYear()
        const date = d.getDate()
        const monthName = months[d.getMonth()]
        const formatted = `${date} ${monthName} ${year}`
        return formatted.toString()
    }

    const titleDate = formatDate(new Date(date))
    
    return (
        <div className="container-fluid mb-4 w-100" >
            <h5 className="text-muted fs-4 mb-4">{titleDate}</h5>
            <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">

                {
                    dateData.map((data,key) => {
                        return <Card key={key} data={data} />
                    })

                }

            </div>
        </div>
    )
}

export default DateContainer;