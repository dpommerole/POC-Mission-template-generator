export const generateToastNotification = ({toast, message, theme, position, duration}) => {
    toast.show(message, { 
        theme, 
        position, 
        duration,
      })
}
