import { axiosGet } from '@/services/backend.service'

export const getFilterHome = async (params, axios) => {
  let result = {
    optionsNameGroup: [],
    optionsNameClient: [],
    optionsName: []
  }

  // fill optionNameGroup
  result.optionsNameGroup = [
    { value: null, text: 'Select a group name' }
  ]

  let responseDistinctNameGroup = await axiosGet({
    axios,
    url: '/api/mission/getDistinctNameGroup',
    params
  })

  const organiseDistinctNameGroup = responseDistinctNameGroup.data.nameGroups
    .map(elem => {
      return { text: elem.nameGroup, value: elem.nameGroup }
    })
    .filter(elem => elem.text)

  result.optionsNameGroup = result.optionsNameGroup.concat(organiseDistinctNameGroup)
  // END fill optionNameGroup

  // fill optionNameClient
  result.optionsNameClient = [
    { value: null, text: 'Select a client name' }
  ]

  let responseDistinctNameClient = await axiosGet({
    axios,
    url: '/api/mission/getDistinctNameClient',
    params
  })

  const organiseDistinctNameClient = responseDistinctNameClient.data.nameClients
    .map(elem => {
      return { text: elem.nameClient, value: elem.nameClient }
    })
    .filter(elem => elem.text)

  result.optionsNameClient = result.optionsNameClient.concat(organiseDistinctNameClient)
  // END fill optionNameClient

  // fill optionName
  if (params.role === 'ADM') {
    result.optionsName = [
      { value: null, text: 'Select a name' }
    ]

    let responseDistinctName = await axiosGet({
      axios,
      url: '/api/mission/getDistinctName',
      params
    })

    const organiseDistinctName = responseDistinctName.data.names
      .map(elem => {
        return { text: elem.name, value: elem.name }
      })
      .filter(elem => elem.text)

    result.optionsName = result.optionsName.concat(organiseDistinctName)
  }
  // END fill optionNameClient
  return result
}
