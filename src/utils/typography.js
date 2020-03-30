import Typography from 'typography'
import githubTheme from 'typography-theme-github'

githubTheme.overrideStyles = () => {
    return {
        h1:{
            fontFamily:'S-CoreDream-8Heavy',
            borderBottom: 'solid 2px lightgrey',
            paddingBottom: '5px',
            marginBottom:'30px'
        },
        h2: {
            fontFamily:'S-CoreDream-4Regular'
        }
    }
}

const typography = new Typography(githubTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography