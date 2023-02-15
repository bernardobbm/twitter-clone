import './Timeline.css';
import { Tweet } from '../../components/Tweet/Tweet';
import { Header } from '../../components/Header/Header';
import { Separator } from '../../components/Separator/Separator';

export function Timeline() {
	return (
		<main className="timeline">
			<Header title="Home" />

			<form className="new-tweet-form">
				<label htmlFor="tweet">
					<img
						src="https://github.com/bernardobbm.png"
						alt="Bernardo Borges"
					/>

					<textarea
						id="tweet"
						placeholder="What's happening?"
					/>
				</label>

				<button type="submit">Tweet</button>
			</form>

			<Separator />

			<Tweet />
			<Tweet />
			<Tweet />
			<Tweet />
		</main>
	);
}
