import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {
        const controller = new AbortController()
        const url = `https://open.er-api.com/v6/latest/${currency}`

        fetch(url, {
            signal: controller.signal,
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok')
                }
                return res.json()
            })
            .then((res) => setData(res.rates || {}))
            .catch(() => setData({}))

        return () => controller.abort()
    }, [currency])

    return data
}

export default useCurrencyInfo;