<script>
  import Error from '$lib/StillLife/Error.svelte';
  import Cover from '$lib/StillLife/Cover.svelte';
  import Title from '$lib/StillLife/Title.svelte';
  import BulletedListItem from '$lib/StillLife/BulletedListItem.svelte';
  import Callout from '$lib/StillLife/Callout.svelte';
  import ChildPage from '$lib/StillLife/ChildPage.svelte';
  import Code from '$lib/StillLife/Code.svelte';
  import ColumnList from '$lib/StillLife/ColumnList.svelte';
  import Column from '$lib/StillLife/Column.svelte';
  import Divider from '$lib/StillLife/Divider.svelte';
  import Embed from '$lib/StillLife/Embed.svelte';
  import Header from '$lib/StillLife/Header.svelte';
  import Image from '$lib/StillLife/Image.svelte';
  import IndentGroup from '$lib/StillLife/IndentGroup.svelte';
  import Underline from '$lib/StillLife/Underline.svelte';
  import InlineCode from '$lib/StillLife/InlineCode.svelte';
  import InlineColor from '$lib/StillLife/InlineColor.svelte';
  import Equation from '$lib/StillLife/Equation.svelte';
  import Link from '$lib/StillLife/Link.svelte';
  import NumberedListItem from '$lib/StillLife/NumberedListItem.svelte';
  import Paragraph from '$lib/StillLife/Paragraph.svelte';
  import Quote from '$lib/StillLife/Quote.svelte';
  import TodoItem from '$lib/StillLife/TodoItem.svelte';
  import Toggle from '$lib/StillLife/Toggle.svelte';
  import { setContext } from 'svelte';

  setContext('pageStuff', {
    pageId: '9be3541630f74527a2f506ac6dd19a34',
    title: 'Bookends',
    previous: '',
    next: '/forgiveness'
  });
</script>

<svelte:head>
  <title>Bookends</title>
</svelte:head>

<Cover coverURL={''} iconEmojiOrURL={'undefined'} />

<div>
  <a href="/StillLife">꧁ Still Life</a>
</div>

<Title>Bookends</Title>

<Code
  code={`Hard, heavy, often beautiful
	(or bent slices of thin steel)
reminders that Reality resides
	outside the stories
	proceedings untold on any page

They hold the words we choose to shelve
	the scruffed covers we assemble
	pristine volumes we hope to resemble
totems of imagination raised in subtle worship
of our unimaginable selves

Coffee stains, folded pulp, taped-up tears
	(sometimes even blood and tears!):
	traveling companions to marginal notes
	left by those who thought themselves &lt;em&gt;me&lt;/em&gt;
	to be read (perhaps) by others
	who &lt;em&gt;also
	weren&#039;t
&lt;/em&gt;
And though your voice has slowly seeped
into the stories of every tome
they are no more &lt;em&gt;you&lt;/em&gt;
	these tales and treasures
	encoded in intricate ink-
	soaked pressure-tangled
	fibers of dead wood
	dead leather and glue
than bookends are &lt;em&gt;ends&lt;/em&gt;

When all accounts must be collected
when time or/and tragedy require
the books be put in boxes
we finally see them for what they are
all the bookends we bought:
	masses working with gravity
	serving no purpose
	but keeping our stories
	straight

■`}
  language="plain text"
/>

<style>
  a {
    text-decoration: none;
    color: hsl(120, 11%, 23%);
    display: block;
  }

  a:hover {
    color: hsl(168, 20%, 65%);
  }
</style>
