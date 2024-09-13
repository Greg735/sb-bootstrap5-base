import masonryDocs from '!!raw-loader!./masonry.docs.mdx';

export default {
  title: 'Utilities/Masonry',
  parameters: {
    docs: {
      description: {
        component: masonryDocs,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
  },
};

const Template = (args) => {
  return `
<section class="py-5">
    <div class="container">
        <div class="row g-1 grid" data-masonry='{"percentPosition": true }'>
            <div class="col-sm-6 col-md-4">
                <img data-cue="fadeIn" data-duration="1800" loading="lazy" class="img-fluid" src="https://picsum.photos/id/391/1920/1080" alt="image" width="1920" height="1080">
            </div>
            <div class="col-sm-6 col-md-4">
                <img data-cue="fadeIn" data-duration="1800" loading="lazy" class="img-fluid" src="https://picsum.photos/id/390/1920/1080" alt="image" width="1920" height="1080">
            </div>
            <div class="col-sm-6 col-md-4">
                <img data-cue="fadeIn" data-duration="1800" loading="lazy" class="img-fluid" src="https://picsum.photos/id/22/700/415" alt="image" width="700" height="415">
            </div>
            <div class="col-sm-6 col-md-4">
                <img data-cue="fadeIn" data-duration="1800" loading="lazy" class="img-fluid" src="https://picsum.photos/id/1/1920/1080" alt="image" width="1920" height="1080">
            </div>
            <div class="col-sm-6 col-md-4">
                <img data-cue="fadeIn" data-duration="1800" loading="lazy" class="img-fluid" src="https://picsum.photos/id/2/700/900" alt="image" width="700" height="900">
            </div>
            <div class="col-sm-6 col-md-4">
            <img data-cue="fadeIn" data-duration="1800" loading="lazy" class="img-fluid" src="https://picsum.photos/id/3/1920/1080" alt="image" width="1920" height="1080">
            </div>
            <div class="col-sm-6 col-md-4">
                <img data-cue="fadeIn" data-duration="1800" loading="lazy" class="img-fluid" src="https://picsum.photos/id/4/700/1200" alt="image" width="700" height="1200">
            </div>
        </div>
    </div>
</section>
  `;
};

export const Default = Template.bind({});
