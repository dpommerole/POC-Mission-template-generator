const $cartIcon = 'data:image/png;base64,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'
const $calendarIcon = 'data:image/png;base64,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'
const $userIcon = 'data:image/png;base64,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'
const $mapMarkerIcon = 'data:image/png;base64,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'
const $atecnaLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABaFBMVEX////UNBT5uSPXdS7SZCn0nx7//P39///9//vadCz13sH5uifXdSr98dPOXyrlgiT4pRv2nx38zGDRXiH0s07cgFXlpILOWRv5thj3yHr//fjzmQ/5//7UNxfZMxf9//n2vFzSZy7Zbi37wSTYcC/SMxnPKwH59e/UeC/VKg758uTYMRn2sSDYbh/5txjTNxDfa03dkGLy4dLw1sXMbTbvriPjpnjypC/458TmfiTfl27UeS/cq4jdXhP66dHYUx/kupX0wRvZfj7ZiEzkcRrhZi/VRRztiyDgl2D1w3Pyy7DkpHL51Xn5xk/95bn2zl7qpWT54KT52IHUhEb00I3qvqfisJPttnn0z7331p715Mr69+fuuk30z4jsmkHrzKbsuIv4wG7fWEHbfV323NTtoYj0xLXUXT3tp5zslIfdUz/SRyPTY0PchmPmpY3rtajdfW/fcmbjkG3RUCr21M3wvb3iY0vbTBQieCBzAAAQJklEQVR4nO2diXfaxhaHJQNzR8F2TEmNowUFjAQCbDnYsdO6sRMnoYnbpC99SZ4Td3HrrbFfmq0v/fffHWEoaAEhJMDn8DuuT0xZ9HGXuXM1GnHcRBNNNNFEE0000UQTTRSWCLF+j/owggsAmhSU/WL/ZA9dNhECVCXA1d4drpyufHxZ4wAfgstnGcIEtbd13jDwR6+/rYFMOPXS2QRAhuKxYvDZrKbwisIb58fFy+haInAvTg1D4bO8wvOmif/pn16gpYC7PDQUMBpqh4iBDP9I0c3DI8wBQMRLksUocPvH54bZgcFIMFTQv0SQVXHUx+hHhKMvfjd4XrNx8NlKxTA+vQBOpuMNAuwHnYZ5lWbaMSxpmsEfrnKYv8Y58IFQPDwrV6FX2R2r6V+KrqB/YdTTUR+vp0SZyPTFmeHF0EThjbMT9MDxBcHUerRimI7YsAuzgL5ijY/jJpZTWYAUj3kjq7hHR7tJKpjA+OPi+CVhGcDKVae9vKpNLH9xIGLUy6M+/JaAVVawumKgOfxyKCxUVlY5oKI66uNviXKy5VUVTcv6BsHiRTOUj8VxqoiZV33SWXHom4PPNsqX9vprtAMLlbGuurLCysMgwvx1yPIX5UQ6WhBRhvJHxVlX+TeNbr4pWxE/0nGFgPrnuZF11lW+OTQF89efWDCPDASslgLmKmvCERQEX6iZBstfrP4aBQelmHLLH3lr0hHYsRrCTGx+LAN7x6GziJTI6FX6oAwtFP38Jb3ougxV+N3trRh64NiwS6tg/bUnD7X+wqyPGOW3pp5V/A8cPZQ1sf4y3pYvPmAYHITit6a+PDd4JRy3agn9q/6OYqjQ6O2CpZFIZTg5xTI3NLfqQDndY/V99KmYEFkuvudZkOvhg/AKToXRv4ZQfxEQ/6xbuSpgUdJLOEDW/xSt2guiSsaE1VV7p0HrKr/CUeW/e2gUVY2oMmbfUO0tb0RKYZGYOn+41WgfR8CBw656XDeUbCXQwfXx3KymVYzzYxVkOdygh4u6avcUU1UlWr9qkGBmN4zTXU4Ot5FHgZ3bqB3yfUzJbQemG1mzv8ETUfjDGg71JLyIJyqrq+qB6ypF18/enfVdziiKXkf/gvDm9PidnJzqemCf0rU3Re4Pvf9CQOP130/CSV1glYe1Qx2r9YCTWYP/wE4mFM/7TneaaWqGcVhrHMgAHobuyVy0OF8P8G0yZSvN9ii+zZtAJsU3UI5VThRxTh0cBDhWV30yjGBTWcxwBvMqlvEoPdKCxRjWQp9OcP5IgpMw7ywe6rpp9tHnaReOa0dyI4VSkXsTtCLAufBhWSbBU7HMcUWrC+q/79Z5AFakUnph3qOg2SKrZfXT8gAxT4m4YmhmsMaCxhvvi1Y53vKI9wHr5UrWVIyVQTyLm9cr2YCTQMU4L8vtzQTCHVUCDkUVlD4PQX2LcFub6XqfA3KLQzHecJ1dEZA/BBuLzErFrH+bLAe1CAcHS6XSdjDXUvjKEdb9ne+3F7CRVzEfVBcXngXmUO8LglDKbyvMvZT+Gg2a8QFsfWlQ4XPfiUsxlUrlTiq5WF34goIaLODLO9MxoVQSHtb5viMla/7l/Ga4F0a/74Nu9fe3ycXFqery4n5QkK1NoRCLlUrT+e16vyOJvuKcp2L997nfOsXyqqmpqgUStCdxZVoolGLoXrEY+ldfX6ZinIBoJ8HYf9evb91J3EtWpxAlOZWc4WgwEgSJNTWN/tVYIONDWYX/TN1KCiBnPs9AsGmohl7FGC6UnGEn8gcFiQn5tOLzHCGOxMY72a0hTbCa13xNlRluw6vCBolNb+a3/WXirGb8Lnp0cYvnFV8uWqnw24nFe9UIQGKxzc183R+J8Y5z73sSOPYVJRX+728xVSWTkYAwPTQNrdeJHU0/K3p9INTqXUnYG2MxoTyo3mt3q/BBNgvbZjbbve9rsurE4z1Jj2peYYuh+DtzU4vJaqQgwmYsXzf5rgGrn3saBE1y1PVLwPrBtEbA5NRypCCMJZbu6lmKccx5FqqqCO+7mSRbMb+q2p0qIpAYq7+sSaPrTB5ntDXvihvryL80r2VppqJV7swlXTGiAMnHSgLmLyXr0rCr4KPvu5wLJLJKP3iYhNVViSlHkEdoEay/mH+ZLgNkBbPaUZfFcWwN4InmXrlZdZUzyKMDYSj4f4Rt01kCZk3jAxbsniTszC1dcZ9g3dm4N1WtTg3PIk1Nu42PWC72WFBG4MTmWxUcPlhd5RUdUYOgUdJ1m3spxufe55nU3zvaECybo1fd64oRJUihtDldsPmXwp/0/Cys5jtAcEqO1fq97vaIFAR/WClpM0hnfICza0tZNd9uR2ddNWzXauihaTUVFAvkHXSc0CAY96xJ2P4Ysv2BHmmxYF3lOQIOHYSNj435o2Kc2QKdIMaR3GkUnHOx3rzCm8wtcQRMeqbc4YJMb5Yu6i9F/8N+tozAX5+Lsg0E4FjHwlPTNH9eNSQQ61npOnMuLBeh46gxYt4Y/7PNsmQVihqCW3XVYrexY7ggDeW3FY3V753ZV4TymbFiTwDoce/Rqx541lWjA2HPzP99XrO/B6Za3tT+cnw+PdJYXdUHx7AsIuBMeGne0fsH+lk3WRlpf7z8S9VyqrEDyedjhU2XPvP/WPsU68hm4mKehwXXqyf3MFn141lDixFkWefsH0Tgg4FTY+MPdlWi9QiVKcDrnxYW+mEYLogg1DhHU+6IzaGsbgS5uEBU5crXHdPY8QJ5ZCtHwGo1NBbEvrs4CCqLr24FwRima606T/MVz0yFz7IWqtpwO7j904LfEXAkIMLO0iP767HE+qdpfWIdRfnn5EIgiuGBxJb27K/HqG6d2TE+UIK56tbycjUgx7Bca+m+I9BFbq81V8lqR9yVGwvLC9Wkr1J3ZCClpV3H6wm8b03ONf3wx6kFdKvFoAYZlkV2ivaGA4FyLKOwS14U3uAfVKd6zMnHA2TprrO7CHenY6yVp7Cp7KJnv2qsQKZ3ys4TIsX7QmlTeFivWJOOvuqqkYEsfcOuxLNpdzpWEEql/EWD5FJYZMdeLrJZ+qNCgRUuuavVWwMyDAuktLRujxDKweqOwE5C5Ge/mkvMVYON5sO2SKlm3ysE/1rPC0IsHo8zkBQjGXsQZpCLjVDaQIo7sVI+nsvFZ6/ObSRSaJSkh8YGJDa9ah17p0UO0ul0xtJXUkNz1YXlZRzcW1pmf08t+LRV9CBLj6iz3yt+c7Opf91o6guHfvjh+0WfVX3kIIKw6tz4gBCx9RjbeMBLnAhPsfryY5PoQR65XGdLZZXtSmMhqLSxsBF/OXoQQGT1ib8CLFqQ6VKssAve1w/2vppF5J4tjAEIq9+LrutO/Kv8xFeURO5adzl5sCsK4Jmvlkq0IELh30VOHWBxMQPZT/qJ9ogtsnQwCIMlEX5cGDmIUKoNeqEKvn4m6SNKIgZZH/waO5XI3/swSbQgpS7LNXyDcDDjI0oiBBFKwncQwmYN+AZf9DZJhAsGYkJsNQwQ1O3lqV45ODIQAev37zjnqtggAvih51gSZYwsrXKifUIFnLMy9EHytGeQRAdSWrrpeA2VWeHVKWrbOdNtlzAKT1iUdIOJDkRwtntxdBMpsUlE0TaJqhOEwFM2lIwGZOm+Mz4IOBdgg2x3P+cmYYSSJz2iJDqQ+Atnd5HKxZfzNv3neqceP3duPUlFeDXXvYUXwQq6aTYPEdJrReeCGZXby9jVnLO3lLjiMopCcSNR7daJCB+EPZxfi2deuuzxBXAznYu3Kzd7dS6RSrRLuuF65ddzKZHo0v+KwrUK+fgsM4jL266m4zY5QVJzt90+r7yRSiWqnieCIgAp5PFoM9+4Lvn7OjPbCyS1Id1w204LrksJKeUZKeGCTFvmQH9Jr9WcrQQCtdl4rqdF8M8ZLG0cIDMb1vPm3BfZhGyRQqFxeJl5x/NZ6M9n/IAkpMcytR8UOupjqYFpWSXaRf6FVgw7JlSAZddRzhEiriCp1Aw4QChsWU/ESMGgjxikiZG+6bjyH0QC85lc3I7iBpKQrrvNY+CG1HyCM1TCAxFa5ojnMvPOLQyoXF5zGsQdJLWxL1ObQG0DQRTr6JOhgxRYkLeU+Zo6DoTQlxknhweI9FwVO18uiip9LLU/qRqFRTow4vF07u2XDt1cc+FwB5mTUtdc1PFEFvTVsEHy9sNLu8jNHl4WwZB2VC4Jyf6kRNsJouAgr6cbdZULhhUnPR/oAuJXjRNEjKOanAm6tW55R4h5c/jWoCAX+aua3A+6lyN9tFRyBMeQQRLNUEkufMFBwF2b4WBpB83BMqqH1wwDJIXj49ytqcXlZyzBBwPZ2hQGNUcIFrG0gSESuF0jcgeZtMsINwqQlPQqKIa1w9nN9MOBSUIBka45q2W/AkLk8v30wxGDsBISOfYH2nEauPJ6Jp0bzL8Gt4iU+q046CaUMuztpGftk77hgbDBXbr2bPBzFyJwxYM152xpaBZJSYnrRXnwjaYJEWXY+hqLxMAoA4BgRZb4bUbmQmmUs+2iud37mUw+oIMFAplrBvnTUDf+Jpx6kMvEg1klqEXmEtLGz/sw+BmxpqwTBYRD/8qkg5AEArHMcWPG2istLHMwDFGkQK98GYgkGEgqwbyKTSLDwmjjEe8WAuSvQCDSxnPrVlGRbMxKcHz8Lte3UfoHwbnjb1sR7vMtskva0L/6NErfICnMVTLQ6G4eYV2LDuKLXH8o/YJIG684UEnA+bkfNd+4vN5X8eUbxHqSlHi8P6yd8AFW76f9Dyr+LZJiXnU7SqfqFJVBvbuW8UviH0RCrxJd2vSRgbC9QcvrjibvYCBojo3r+6BGMHB0Y6Eyd8XnpMuvRZhXyWKEWddV7APVuzsYKj1Lyd4gKSnFcpUKg63ECyZryEX/6l219AaRpETq8T6QMHdb9s0hiizoudrNdK9BxQdI4qfb+I7q6O5uA6Qtf3nFfleQOeZYLFdxI743KrvvxXrOvQ3vyyJsKrs/wKbEoYGwpSbW+BgMRJKYV4U3eQoOIlM2q99d80bpBiJtPAOg1Hl91gjU8IryfDzuMap4gWDKTVy3+lVjdJNHwsHrm+mc66DiAZJKoVdZN+0b9cF3CIOe/rqzPeviXx4nQ9GraIib24cka1922D/IZZwkzrUoVq76eR/EUd8XzU1gnYZ5/SjtQOkAaaxsSCVujKFXtSQSDJXdHTZ/THtaxKqrbj1V5TFIuV5i5b0I5YNC5mHOGwT/iV5FxtGrmpIpa0Nh/fV1x6DSCSKhV2FdFfjE5jDU+IrZDha/Mv9qTuw7QKRrz6zFspHdSChMEVlWD9ZaQd8CSVm5KuTb1UQpytLx1qOmf/0DkrixxVl9vksiLJ4I1uW7O43kdQHC2m7AYRSNb7ZyFabiIuavWZyrXG1MOn4Wx3Xc6CWAre8K6UzmqoT1yOOZyxDe7mJbs27trt//5dr1VzM05Fs5DVEgc8S6Xldkt9bixu9O0/7FBr3GjrmX1hoTTTTRRBNNNNFEE000UWT6PxD/b8gl9eR/AAAAAElFTkSuQmCC'
const $imageFallback = 'https://upload.wikimedia.org/wikipedia/commons/2/20/Point_d_interrogation.jpg'

export async function makePDF(mission) {
  if (process.browser) {
    const jsPDF = require('jspdf')
    const doc = new jsPDF("l", "pt", [1204, 1080])

    if (mission.image) {
      convertImgToDataURLviaCanvas(mission.image, await function(result) {
        mission.image = result
      }, 'image/png')
    }

    if (mission.logoGroup) {
      convertImgToDataURLviaCanvas(mission.logoGroup, await function(result) {
        mission.logoGroup = result
      }, 'image/png')
    }

    if (mission.logoClient) {
      convertImgToDataURLviaCanvas(mission.logoClient, await function(result) {
        mission.logoClient = result
      }, 'image/png')
    }

    if (mission.environments && mission.environments.length > 0) {

      for (let i = 0; i < mission.environments.length; i++) {
        if (mission.environments[i].logo) {
          convertImgToDataURLviaCanvas(mission.environments[i].logo, await function (result) {
            mission.environments[i].logo = result
          }, 'image/png')
        }
      }

      setTimeout(async () => {
        for (let i = 0; i < mission.environments.length; i++) {
          if (mission.environments[i].logo && !mission.environments[i].logo.includes('base64')) {
            convertImgToDataURLviaCanvas($imageFallback, await function (result) {
              mission.environments[i].logo = result
            }, 'image/png')
          }
        }
      }, 400)
    }

    setTimeout(() => {


      // SET background
      doc.setDrawColor(0)
      doc.setFillColor(241, 196, 15)
      doc.rect(0, 0, 361, 1080, 'F')
      doc.setFillColor(255, 255, 255)
      doc.rect(361, 0, 843, 1080, 'F')

      // add mission.image
      doc.addImage(mission.image, 'JPEG', 0, 0, 361, 160)

      // add mission.category
      doc.setDrawColor(0)
      doc.setFillColor(47, 54, 64)
      const widthMission = getTextWidth('#' + mission.category, "bold 12pt arial") + 10
      const widthCategory = getTextWidth('#' + mission.category, "bold 12pt arial") + 10
      doc.roundedRect(130 - (widthMission / 2), 176, widthMission, 24, 3, 3, 'FD')
      doc.roundedRect(220 - (widthCategory / 2) + 10, 176, widthCategory, 24, 3, 3, 'FD')

      doc.setTextColor(255, 255, 255)
      doc.text('#Mission', 130, 194, 'center')
      doc.text('#' + mission.category, 220 + 10, 194, 'center')

      // add picto detailMission
      doc.setFillColor(255, 255, 255)
      doc.circle(45, 257, 25, 'F')
      doc.addImage($cartIcon, 'JPEG', 35, 247, 20, 20)
      const saveFontSize = doc.getFontSize()
      let fontSize = saveFontSize
      while (getTextWidth(mission.type, "bold " + fontSize + "pt arial") > 90) {
        fontSize--
      }
      doc.setFontSize(fontSize)
      doc.text(mission.type, 45, 303, 'center')
      fontSize = saveFontSize
      doc.setFontSize(fontSize)

      doc.circle(135, 257, 25, 'F')
      doc.addImage($calendarIcon, 'JPEG', 125, 247, 20, 20)
      while (getTextWidth(mission.duration, "bold " + fontSize + "pt arial") > 90) {
        fontSize -= 0.5
      }
      doc.setFontSize(fontSize)
      doc.text(mission.duration, 135, 303, 'center')
      fontSize = saveFontSize
      doc.setFontSize(fontSize)

      doc.circle(225, 257, 25, 'F')
      doc.addImage($userIcon, 'JPEG', 215, 247, 20, 20)
      while (getTextWidth('' + mission.teamSize, "bold " + fontSize + "pt arial") > 90) {
        fontSize -= 0.5
      }
      doc.setFontSize(fontSize)
      doc.text('' + mission.teamSize, 225, 303, 'center')
      fontSize = saveFontSize
      doc.setFontSize(fontSize)

      doc.circle(315, 257, 25, 'F')
      doc.addImage($mapMarkerIcon, 'JPEG', 305, 247, 20, 20)
      while (getTextWidth(mission.location, "bold " + fontSize + "pt arial") > 90) {
        fontSize -= 0.5
      }
      doc.setFontSize(fontSize)
      doc.text(mission.location, 315, 303, 'center')
      fontSize = saveFontSize
      doc.setFontSize(fontSize)

      // Environments
      doc.setDrawColor(0)
      doc.setFillColor(47, 54, 64)
      const widthEnv = getTextWidth('#Environement', "bold 12pt arial") + 10
      doc.roundedRect(180 - (widthEnv / 2), 354, widthEnv, 24, 3, 3, 'FD')
      doc.setTextColor(255, 255, 255)
      doc.text('#Environement', 180, 372, 'center')

      // Env picto
      doc.setFillColor(255, 255, 255)
      doc.setTextColor(255, 255, 255)
      doc.setDrawColor(241, 196, 15)
      const baseWidth = 45
      const baseHeight = 435
      let row = 0
      let column = 0
      for (let i = 0; i < mission.environments.length; i++) {

        doc.circle(baseWidth + (90 * column), baseHeight + (122 * row), 25, 'F')
        doc.addImage(mission.environments[i].logo,
          'JPEG', (baseWidth - 25) + (90 * column), (baseHeight - 25) + (122 * row), 50, 50)
        doc.setLineWidth(2)
        doc.circle(baseWidth + (90 * column), baseHeight + (122 * row), 25)
        doc.circle(baseWidth + (90 * column), baseHeight + (122 * row), 26)
        doc.circle(baseWidth + (90 * column), baseHeight + (122 * row), 27)
        doc.circle(baseWidth + (90 * column), baseHeight + (122 * row), 28)
        doc.circle(baseWidth + (90 * column), baseHeight + (122 * row), 29)
        doc.circle(baseWidth + (90 * column), baseHeight + (122 * row), 30)
        doc.circle(baseWidth + (90 * column), baseHeight + (122 * row), 31)
        doc.circle(baseWidth + (90 * column), baseHeight + (122 * row), 32)
        doc.circle(baseWidth + (90 * column), baseHeight + (122 * row), 33)
        doc.circle(baseWidth + (90 * column), baseHeight + (122 * row), 34)
        doc.circle(baseWidth + (90 * column), baseHeight + (122 * row), 35)
        doc.setLineWidth(1)

        while (getTextWidth('' + mission.environments[i].name, "bold " + fontSize + "pt arial") > 90) {
          fontSize -= 0.5
        }
        doc.setFontSize(fontSize)
        doc.text(mission.environments[i].name,
          baseWidth + (90 * column), (baseHeight + 46) + (122 * row), 'center')
        fontSize = saveFontSize
        doc.setFontSize(fontSize)

        if (column === 3) {
          column = 0
          row++
        } else {
          column++
        }
      }

      // logo group / client
      let widthLogoClient = 378
      if (mission.logoGroup) {
        doc.addImage(mission.logoGroup, 378, 16, 75, 50)
        widthLogoClient += 85
      }
      if (mission.logoClient) {
        doc.addImage(mission.logoClient, widthLogoClient, 16, 75, 50)
      }

      doc.addImage($atecnaLogo, 1139.8, 16, 48.7167, 48.7167)

      // context
      doc.setTextColor(0, 0, 0)
      row = 0
      let tmpContext = mission.context.split(' ')
      while (tmpContext && tmpContext[0]) {
        if (getTextWidth('' + tmpContext[0], "bold " + 12 + "pt arial") > 370) {
          doc.text(tmpContext[0], 377, 247 + (24 * row), 'justify')
          tmpContext.shift()
          row += 1
        } else {
          if (tmpContext[0] && tmpContext[1]) {
            tmpContext[1] = tmpContext[0] + ' ' + tmpContext[1]
            tmpContext.shift()
          } else {
            doc.text(tmpContext[0], 377, 247 + (24 * row), 'justify')
            tmpContext.shift()
          }
        }

      }

      doc.save('sample.pdf')
    }, 800)
  }
}

function getTextWidth(text, font) {

  let element = document.createElement('canvas')
  let context = element.getContext("2d")
  if (context) {
    context.font = font
    return context.measureText(text).width
  } else {
    return -1
  }
}

const convertImgToDataURLviaCanvas = async (url, callback, outputFormat) => {
  let img = new Image()
  img.crossOrigin = 'anonymous'
  img.onload = await function() {
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    let dataURL
    canvas.height = img.height
    canvas.width = img.width
    if (ctx) {
      ctx.drawImage(img, 0, 0)
      dataURL = canvas.toDataURL(outputFormat)
      callback(dataURL)
    }
  }

  img.src = url
}