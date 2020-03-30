import Typography from 'typography'
import githubTheme from 'typography-theme-github'

githubTheme.overrideStyles = () => {
    return {
        h1:{

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