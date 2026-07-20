import { Component, type ErrorInfo, type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  error: Error | null
  componentStack: string | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null, componentStack: null }

  static getDerivedStateFromError(error: Error): Pick<ErrorBoundaryState, 'error'> {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, info.componentStack)
    this.setState({ componentStack: info.componentStack ?? null })
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-black px-6 py-16 text-center text-white">
          <p className="text-caption font-medium uppercase tracking-[0.2em] text-accent">Something went wrong</p>
          <h1 className="text-h2 font-semibold">This section hit a snag.</h1>
          <p className="max-w-md text-sm text-white/60">
            Please refresh the page. If the issue persists, check the browser console for details.
          </p>
          {import.meta.env.DEV && (
            <pre className="mt-4 w-full max-w-2xl overflow-auto whitespace-pre-wrap break-words rounded-2xl bg-white/5 p-4 text-left text-xs text-accent">
              {this.state.error.message}
              {this.state.error.stack && `\n\n${this.state.error.stack}`}
              {this.state.componentStack && `\n\nComponent stack:${this.state.componentStack}`}
            </pre>
          )}
        </div>
      )
    }

    return this.props.children
  }
}
